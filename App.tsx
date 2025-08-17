import React, { useState } from 'react';
import WeeklyPlan from './components/WeeklyPlan';
import ShoppingList from './components/ShoppingList';
import WorkoutPlan from './components/WorkoutPlan';
import ProgressTracker from './components/ProgressTracker';
import { CalendarIcon, ShoppingCartIcon, DumbbellIcon, ChartBarIcon } from './components/Icons';

type Tab = 'plan' | 'list' | 'workout' | 'progress';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('plan');

  const getButtonClasses = (tabName: Tab) => {
    return `flex flex-col items-center justify-center gap-1 px-2 py-1 font-medium transition-all duration-300 rounded-lg flex-1 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
      activeTab === tabName
        ? 'text-teal-600'
        : 'text-gray-500 hover:text-teal-500 hover:bg-teal-50'
    }`;
  };
  
  const renderContent = () => {
    switch (activeTab) {
        case 'plan':
            return <WeeklyPlan />;
        case 'list':
            return <ShoppingList />;
        case 'workout':
            return <WorkoutPlan />;
        case 'progress':
            return <ProgressTracker />;
        default:
            return <WeeklyPlan />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pb-24">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-teal-700 tracking-tight">
            Planificador de Estilo de Vida
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Tu guía de comidas, compras, entreno y progreso.
          </p>
        </header>

        <main>
          {renderContent()}
        </main>
        
        <footer className="text-center mt-12 text-gray-400 text-sm">
            <p>Creado con ❤️ para una vida más saludable y organizada.</p>
        </footer>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="flex justify-around items-center h-16 max-w-2xl mx-auto px-2">
            <button
              onClick={() => setActiveTab('plan')}
              className={getButtonClasses('plan')}
              aria-label="Plan Semanal"
            >
              <CalendarIcon className="w-6 h-6" />
              <span className="text-xs tracking-tight">Plan Semanal</span>
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={getButtonClasses('list')}
              aria-label="Lista de la Compra"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="text-xs tracking-tight">Lista Compra</span>
            </button>
             <button
              onClick={() => setActiveTab('workout')}
              className={getButtonClasses('workout')}
              aria-label="Plan de Entrenamiento"
            >
              <DumbbellIcon className="w-6 h-6" />
              <span className="text-xs tracking-tight">Entrene</span>
            </button>
             <button
              onClick={() => setActiveTab('progress')}
              className={getButtonClasses('progress')}
              aria-label="Seguimiento de Progreso"
            >
              <ChartBarIcon className="w-6 h-6" />
              <span className="text-xs tracking-tight">Progreso</span>
            </button>
        </div>
      </nav>
    </div>
  );
};

export default App;