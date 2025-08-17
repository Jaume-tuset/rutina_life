import React from 'react';
import type { ShoppingCategoryData, ShoppingItem } from '../types';
import { CheckCircleIcon, PencilIcon, TrashIcon } from './Icons';

interface ShoppingCategoryProps {
    categoryData: ShoppingCategoryData;
    checkedItems: Record<string, boolean>;
    onToggleItem: (itemId: string) => void;
    onDeleteItem: (itemId: string) => void;
    onEditItem: (item: ShoppingItem) => void;
}

const ShoppingCategory: React.FC<ShoppingCategoryProps> = ({ categoryData, checkedItems, onToggleItem, onDeleteItem, onEditItem }) => {
    const formatPrice = (price?: number) => {
        if (price === undefined) return '';
        return `${price.toFixed(2)} €`;
    }

    return (
        <div className="border-b border-gray-200 pb-4 last:border-b-0">
            <h3 className="text-xl font-semibold text-teal-800 mb-3">{categoryData.category}</h3>
            <ul className="space-y-2">
                {categoryData.items.map(item => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                        <li key={item.id} className="group flex items-center gap-3 p-1 rounded-md transition-colors hover:bg-teal-50">
                             <div className="relative flex items-center h-full">
                                <input
                                    type="checkbox"
                                    id={`item-${item.id}`}
                                    checked={isChecked}
                                    onChange={() => onToggleItem(item.id)}
                                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-teal-500 checked:border-teal-500 transition-all duration-200 cursor-pointer"
                                />
                                <CheckCircleIcon className="absolute w-5 h-5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none" />
                            </div>
                            <label 
                                htmlFor={`item-${item.id}`}
                                className={`flex-1 grid grid-cols-3 items-center cursor-pointer transition-colors duration-200 gap-2 ${isChecked ? 'text-gray-400 line-through' : 'text-gray-700'}`}
                            >
                                <span className="col-span-1">{item.name}</span>
                                <span className={`col-span-1 text-sm font-medium px-2 py-0.5 rounded-full justify-self-start ${isChecked ? 'bg-gray-200 text-gray-500' : 'bg-teal-100 text-teal-800'}`}>
                                    {item.quantity}
                                </span>
                                 <span className={`col-span-1 text-sm font-semibold justify-self-end ${isChecked ? 'text-gray-400' : 'text-teal-700'}`}>
                                    {formatPrice(item.price)}
                                </span>
                            </label>
                             <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => onEditItem(item)} className="p-1 text-gray-400 hover:text-blue-500 rounded-full hover:bg-blue-100" aria-label="Editar">
                                    <PencilIcon className="w-4 h-4" />
                                </button>
                                <button onClick={() => onDeleteItem(item.id)} className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-100" aria-label="Eliminar">
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ShoppingCategory;
