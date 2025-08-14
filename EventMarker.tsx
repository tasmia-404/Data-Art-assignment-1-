
import React from 'react';
import type { TimelineEvent } from '../types';

interface EventMarkerProps {
  event: TimelineEvent;
  isOdd: boolean;
  onClick: () => void;
}

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
    const categoryColors: { [key: string]: string } = {
        'Technology': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        'Politics': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        'Exploration': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        'Science': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    };
    
    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-800'}`}>
            {category}
        </span>
    );
};

export const EventMarker: React.FC<EventMarkerProps> = ({ event, isOdd, onClick }) => {
  const alignmentClass = isOdd ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex justify-center items-start ${alignmentClass} w-full`}>
      {/* Content Card */}
      <div className="w-full md:w-5/12">
        <div 
          onClick={onClick}
          className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent dark:hover:border-primary-dark/50 hover:border-primary-light/50"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">{event.title}</h3>
            <CategoryBadge category={event.category} />
          </div>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{event.description.substring(0, 100)}...</p>
        </div>
      </div>
      
      {/* Dot and Year */}
      <div className="w-2/12 hidden md:flex flex-col items-center">
        <div className="absolute w-5 h-5 bg-surface-light dark:bg-surface-dark rounded-full border-4 border-primary-light dark:border-primary-dark mt-6"></div>
        <div className="mt-16 text-lg font-semibold text-secondary-light dark:text-secondary-dark">{event.year}</div>
      </div>
      
       {/* Spacer for alignment */}
      <div className="w-5/12 hidden md:block"></div>
      
      {/* Year for Mobile */}
      <div className="absolute left-0 md:hidden w-1/2 flex justify-end pr-8">
        <div className="text-lg font-semibold text-secondary-light dark:text-secondary-dark">{event.year}</div>
      </div>
    </div>
  );
};
