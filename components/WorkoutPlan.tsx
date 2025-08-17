import React, { useState, useEffect, useMemo } from 'react';
import { WORKOUT_PLAN_DATA } from '../constants';
import { CheckCircleIcon } from './Icons';
import type { WorkoutEntry } from '../types';
import WorkoutModal from './WorkoutModal';

const WorkoutPlan: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
        try {
            const saved = localStorage.getItem('checkedWorkouts');
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error("Could not parse workout items from localStorage", error);
            return {};
        }
    });
    
    const [selectedWorkout, setSelectedWorkout] = useState<WorkoutEntry | null>(null);

    const dynamicWorkoutData: WorkoutEntry[] = useMemo(() => {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        return WORKOUT_PLAN_DATA.map((item, index) => {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + index);
            
            const formattedDate = currentDate.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            const dayOfWeek = currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
            const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

            return {
                ...item,
                id: `workout-item-${index}`,
                date: formattedDate,
                day: capitalizedDayOfWeek,
            };
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('checkedWorkouts', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const handleToggleItem = (itemId: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const handleWorkoutClick = (workout: WorkoutEntry) => {
        if (workout.details && workout.details.length > 0) {
            setSelectedWorkout(workout);
        }
    };

    const totalItems = dynamicWorkoutData.length;
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

    return (
        <>
            <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Plan de Entrenamiento</h2>
                
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-600">
                        <span>Progreso</span>
                        <span>{completedItems} / {totalItems}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                            className="bg-teal-500 h-2.5 rounded-full transition-all duration-500" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-teal-800 uppercase bg-teal-50">
                            <tr>
                                <th scope="col" className="p-4"></th>
                                <th scope="col" className="px-6 py-3">Fecha</th>
                                <th scope="col" className="px-6 py-3">Día</th>
                                <th scope="col" className="px-6 py-3">Ejercicio</th>
                                <th scope="col" className="px-6 py-3">Cardio</th>
                                <th scope="col" className="px-6 py-3">Suplementos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dynamicWorkoutData.map((item) => {
                                const isChecked = !!checkedItems[item.id];
                                const hasDetails = item.details && item.details.length > 0;
                                return (
                                    <tr 
                                        key={item.id} 
                                        className={`border-b ${isChecked ? 'bg-gray-100 text-gray-400' : 'bg-white'} ${hasDetails ? 'hover:bg-teal-50 cursor-pointer' : ''}`}
                                        onClick={() => handleWorkoutClick(item)}
                                    >
                                        <td className="w-4 p-4" onClick={(e) => e.stopPropagation()}>
                                            <div className="relative flex items-center h-full">
                                                <input
                                                    type="checkbox"
                                                    id={`workout-table-${item.id}`}
                                                    checked={isChecked}
                                                    onChange={() => handleToggleItem(item.id)}
                                                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-teal-500 checked:border-teal-500 transition-all duration-200 cursor-pointer"
                                                    aria-labelledby={`exercise-table-${item.id}`}
                                                />
                                                <CheckCircleIcon className="absolute w-5 h-5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none" />
                                            </div>
                                        </td>
                                        <td className={`px-6 py-4 font-medium ${isChecked ? '' : 'text-gray-900'}`}>{item.date}</td>
                                        <td className={`px-6 py-4 ${isChecked ? '' : 'font-semibold'}`}>{item.day}</td>
                                        <td id={`exercise-table-${item.id}`} className={`px-6 py-4 ${isChecked ? 'line-through' : ''}`}>{item.exercise}</td>
                                        <td className="px-6 py-4">{item.cardio}</td>
                                        <td className="px-6 py-4">{item.supplements}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="block md:hidden space-y-4">
                    {dynamicWorkoutData.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        const hasDetails = item.details && item.details.length > 0;
                        return (
                            <div 
                                key={item.id} 
                                className={`p-4 rounded-lg transition-colors ${isChecked ? 'bg-gray-100 text-gray-500' : 'bg-white border border-gray-200'} ${hasDetails ? 'cursor-pointer hover:bg-teal-50' : ''}`}
                                onClick={() => handleWorkoutClick(item)}
                            >
                                <div className="flex items-start gap-4">
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <div className="relative flex items-center h-full mt-1">
                                            <input
                                                type="checkbox"
                                                id={`workout-card-${item.id}`}
                                                checked={isChecked}
                                                onChange={() => handleToggleItem(item.id)}
                                                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-teal-500 checked:border-teal-500 transition-all duration-200 cursor-pointer"
                                                aria-labelledby={`exercise-card-${item.id}`}
                                            />
                                            <CheckCircleIcon className="absolute w-5 h-5 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline">
                                            <p className={`font-bold ${isChecked ? 'text-gray-500' : 'text-teal-800'}`}>{item.day}</p>
                                            <p className="text-xs text-gray-400">{item.date}</p>
                                        </div>
                                        <p id={`exercise-card-${item.id}`} className={`mt-1 font-medium ${isChecked ? 'line-through text-gray-400' : 'text-gray-800'}`}>{item.exercise}</p>
                                        <div className="mt-2 text-xs space-y-1">
                                            <p><span className="font-semibold">Cardio:</span> {item.cardio}</p>
                                            <p><span className="font-semibold">Suplementos:</span> {item.supplements}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            {selectedWorkout && (
                <WorkoutModal 
                    workout={selectedWorkout}
                    onClose={() => setSelectedWorkout(null)}
                />
            )}
        </>
    );
};

export default WorkoutPlan;