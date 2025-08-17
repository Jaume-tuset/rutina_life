import React from 'react';
import { WEEKLY_MEAL_PLAN } from '../constants';
import DayCard from './DayCard';

const WeeklyPlan: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {WEEKLY_MEAL_PLAN.map(dayPlan => (
                <DayCard 
                    key={dayPlan.day} 
                    dayPlan={dayPlan} 
                />
            ))}
        </div>
    );
};

export default WeeklyPlan;
