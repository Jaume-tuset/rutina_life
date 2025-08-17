import React, { useState, useEffect } from 'react';
import type { ProgressEntry } from '../types';
import { PlusIcon, TrashIcon } from './Icons';

const ProgressTracker: React.FC = () => {
    const [entries, setEntries] = useState<ProgressEntry[]>(() => {
        try {
            const saved = localStorage.getItem('progressEntries');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("Could not parse progress entries from localStorage", error);
            return [];
        }
    });

    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [weight, setWeight] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    useEffect(() => {
        localStorage.setItem('progressEntries', JSON.stringify(entries));
    }, [entries]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!date || !weight) {
            alert('Por favor, introduce la fecha y el peso.');
            return;
        }
        const newEntry: ProgressEntry = {
            id: new Date().toISOString(),
            date,
            weight,
            notes,
        };
        setEntries([newEntry, ...entries]);
        setWeight('');
        setNotes('');
    };

    const handleDelete = (id: string) => {
        if(window.confirm('¿Estás seguro de que quieres eliminar este registro?')){
            setEntries(entries.filter(entry => entry.id !== id));
        }
    };
    
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Añadir Nuevo Registro</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="Ej: 75.5"
                                step="0.1"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notas (opcional)</label>
                        <textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={3}
                            placeholder="¿Cómo te sentiste? ¿Alguna observación?"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                         <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
                            <PlusIcon />
                            Guardar Progreso
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                 <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Historial de Progreso</h2>
                 {entries.length > 0 ? (
                    <ul className="space-y-4">
                        {entries.map(entry => (
                            <li key={entry.id} className="p-4 bg-gray-50 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all hover:bg-teal-50">
                                <div className="flex-1">
                                    <p className="font-bold text-teal-800 text-lg">{new Date(entry.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
                                    <p className="text-gray-800"><span className="font-semibold">Peso:</span> {entry.weight} kg</p>
                                    {entry.notes && <p className="text-gray-600 mt-1 text-sm"><span className="font-semibold">Notas:</span> {entry.notes}</p>}
                                </div>
                                <button onClick={() => handleDelete(entry.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-100 rounded-full transition-colors" aria-label="Eliminar registro">
                                    <TrashIcon />
                                </button>
                            </li>
                        ))}
                    </ul>
                 ) : (
                    <p className="text-center text-gray-500 mt-4">Aún no has registrado ningún progreso. ¡Añade tu primer registro para empezar!</p>
                 )}
            </div>
        </div>
    );
};

export default ProgressTracker;
