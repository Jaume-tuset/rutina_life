import React, { useState, useEffect, useMemo } from 'react';
import { SHOPPING_LIST_DATA } from '../constants';
import type { ShoppingCategoryData, ShoppingItem } from '../types';
import ShoppingCategory from './ShoppingCategory';
import { PlusIcon, XIcon } from './Icons';

const ShoppingList: React.FC = () => {
    const [list, setList] = useState<ShoppingCategoryData[]>(() => {
        try {
            const savedList = localStorage.getItem('shoppingList');
            return savedList ? JSON.parse(savedList) : SHOPPING_LIST_DATA;
        } catch (error) {
            console.error("Could not parse shopping list from localStorage", error);
            return SHOPPING_LIST_DATA;
        }
    });

    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
        try {
            const savedChecked = localStorage.getItem('checkedShoppingItems');
            return savedChecked ? JSON.parse(savedChecked) : {};
        } catch (error) {
            console.error("Could not parse checked items from localStorage", error);
            return {};
        }
    });
    
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<ShoppingItem | null>(null);

    useEffect(() => {
        localStorage.setItem('shoppingList', JSON.stringify(list));
    }, [list]);

    useEffect(() => {
        localStorage.setItem('checkedShoppingItems', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const handleToggleItem = (itemId: string) => {
        setCheckedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
    };

    const handleAddItem = (newItemData: { category: string, name: string, quantity: string, price?: number }) => {
        const { category, name, quantity, price } = newItemData;

        const newShoppingItem: ShoppingItem = {
            id: new Date().toISOString(),
            name,
            quantity,
            price,
        };

        setList(prevList => {
            const categoryExists = prevList.some(c => c.category.toLowerCase() === category.toLowerCase());
            if (categoryExists) {
                return prevList.map(c => 
                    c.category.toLowerCase() === category.toLowerCase()
                        ? { ...c, items: [...c.items, newShoppingItem] }
                        : c
                );
            } else {
                return [...prevList, { category, items: [newShoppingItem] }];
            }
        });
        
        setIsAddModalOpen(false);
    };

    const handleDeleteItem = (itemId: string) => {
        if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
            setList(prevList => 
                prevList.map(category => ({
                    ...category,
                    items: category.items.filter(item => item.id !== itemId)
                })).filter(category => category.items.length > 0)
            );
        }
    };
    
    const handleUpdateItem = (updatedItem: ShoppingItem) => {
        setList(prevList =>
            prevList.map(category => ({
                ...category,
                items: category.items.map(item =>
                    item.id === updatedItem.id ? updatedItem : item
                )
            }))
        );
        setEditingItem(null);
    };
    
    const totalItems = list.reduce((acc, cat) => acc + cat.items.length, 0);
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    const totalPrice = list.reduce((total, category) => 
        total + category.items.reduce((catTotal, item) => catTotal + (item.price || 0), 0), 0
    );

    return (
        <div className="max-w-4xl mx-auto space-y-8 relative">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 border-b pb-4">
                    <h2 className="text-3xl font-bold text-center sm:text-left text-teal-700">Lista de la Compra</h2>
                     <div className="text-center sm:text-right">
                        <p className="text-sm text-gray-500">Total Estimado</p>
                        <p className="text-2xl font-bold text-teal-600">{totalPrice.toFixed(2)} €</p>
                    </div>
                </div>
                
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-600">
                        <span>Progreso</span>
                        <span>{completedItems} / {totalItems}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-teal-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="space-y-6">
                    {list.map(categoryData => (
                        <ShoppingCategory
                            key={categoryData.category}
                            categoryData={categoryData}
                            checkedItems={checkedItems}
                            onToggleItem={handleToggleItem}
                            onDeleteItem={handleDeleteItem}
                            onEditItem={(item) => setEditingItem(item)}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={() => setIsAddModalOpen(true)}
                className="fixed bottom-24 right-4 sm:right-8 lg:right-12 z-40 w-14 h-14 bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                aria-label="Añadir producto"
            >
                <PlusIcon className="w-8 h-8" />
            </button>


            {isAddModalOpen && (
                <AddModal 
                    categories={list.map(c => c.category)}
                    onClose={() => setIsAddModalOpen(false)}
                    onSave={handleAddItem}
                />
            )}

            {editingItem && (
                 <EditModal 
                    item={editingItem} 
                    onClose={() => setEditingItem(null)} 
                    onSave={handleUpdateItem} 
                />
            )}
        </div>
    );
};

const AddModal: React.FC<{
    categories: string[],
    onClose: () => void, 
    onSave: (newItem: { category: string, name: string, quantity: string, price?: number }) => void
}> = ({ categories, onClose, onSave }) => {
    const [newItem, setNewItem] = useState({ category: '', name: '', quantity: '', price: '' });
    const [newCategory, setNewCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, quantity, price } = newItem;
        const category = newCategory || newItem.category;

        if (!category || !name || !quantity) {
            alert('Por favor, completa la categoría, el nombre y la cantidad.');
            return;
        }
        
        onSave({
            category,
            name,
            quantity,
            price: parseFloat(price) || undefined
        });
    };

    return (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                 <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-teal-800">Añadir Nuevo Producto</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><XIcon /></button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Categoría</label>
                             <select value={newItem.category} onChange={e => { setNewItem({...newItem, category: e.target.value}); setNewCategory(''); }} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
                                <option value="">Selecciona</option>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                 <option value="new">-- Nueva Categoría --</option>
                            </select>
                        </div>
                         {newItem.category === 'new' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre Nueva Cat.</label>
                                <input type="text" value={newCategory} onChange={e => setNewCategory(e.target.value)} placeholder="Ej: Lácteos" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
                            </div>
                        )}
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Producto</label>
                            <input type="text" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} placeholder="Ej: Leche" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                            <input type="text" value={newItem.quantity} onChange={e => setNewItem({...newItem, quantity: e.target.value})} placeholder="Ej: 1L" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Precio (€)</label>
                            <input type="number" step="0.01" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} placeholder="Ej: 1.20" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                        </div>
                    </div>
                     <div className="flex justify-end gap-3 mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">Añadir Producto</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const EditModal: React.FC<{item: ShoppingItem, onClose: () => void, onSave: (item: ShoppingItem) => void}> = ({ item, onClose, onSave }) => {
    const [formState, setFormState] = useState(item);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formState);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-teal-800">Editar Producto</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><XIcon /></button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Producto</label>
                        <input type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                        <input type="text" value={formState.quantity} onChange={e => setFormState({...formState, quantity: e.target.value})} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio (€)</label>
                        <input type="number" step="0.01" value={formState.price || ''} onChange={e => setFormState({...formState, price: parseFloat(e.target.value) || undefined})} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                     <div className="flex justify-end gap-3 mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">Guardar Cambios</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShoppingList;