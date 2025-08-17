import React from 'react';
import type { WorkoutEntry } from '../types';
import { XIcon } from './Icons';

interface WorkoutModalProps {
    workout: WorkoutEntry;
    onClose: () => void;
}

const WorkoutModal: React.FC<WorkoutModalProps> = ({ workout, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl z-10">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-teal-800">{workout.exercise}</h3>
                        <p className="text-sm text-gray-500">{workout.day} - {workout.date}</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                        <XIcon className="w-6 h-6" />
                    </button>
                </header>
                
                <main className="overflow-y-auto p-4 sm:p-6 space-y-6">
                    {workout.details.length > 0 ? (
                        workout.details.map((exercise, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                <div className="w-full sm:w-1/3 flex-shrink-0">
                                    <img 
                                        src={exercise.imageUrl} 
                                        alt={exercise.name} 
                                        className="w-full h-auto object-cover rounded-md shadow-sm aspect-video"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="w-full sm:w-2/3">
                                    <h4 className="font-bold text-lg text-teal-700">{exercise.name}</h4>
                                    <p className="mt-1 text-gray-600 text-sm">{exercise.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-8">No hay detalles de ejercicios para este día de descanso.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default WorkoutModal;