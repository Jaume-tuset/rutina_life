import React from 'react';
import type { DayPlan } from '../types';

interface DayCardProps {
    dayPlan: DayPlan;
}

const DayCard: React.FC<DayCardProps> = ({ dayPlan }) => {
    const mealEntries = Object.entries(dayPlan.meals) as [keyof DayPlan['meals'], string][];
    const mealLabels: Record<keyof DayPlan['meals'], string> = {
        breakfast: 'Desayuno',
        lunch: 'Comida',
        midAfternoon: 'Media Tarde',
        snack: 'Snack',
        dinner: 'Cena'
    };
    
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
            <div className="bg-teal-600 p-4">
                <h3 className="text-2xl font-bold text-white text-center">{dayPlan.day}</h3>
            </div>
            <div className="p-5 flex-grow">
                <ul className="space-y-3 text-gray-700">
                    {mealEntries.map(([type, meal]) => {
                        if (meal === '-') return null;
                        return (
                            <li key={type}>
                                <span className="font-semibold text-teal-800">{mealLabels[type]}:</span> {meal}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DayCard;