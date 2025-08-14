
import React, { useEffect } from 'react';
import type { TimelineEvent } from '../types';
import { CloseIcon } from './icons/CloseIcon';

interface EventModalProps {
  event: TimelineEvent | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!event) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-transform duration-300 scale-95 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <style>
          {`
            @keyframes modal-in {
              from { opacity: 0; transform: scale(0.95) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-modal-in {
              animation: modal-in 0.3s ease-out forwards;
            }
          `}
        </style>
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-2 rounded-full text-secondary-light dark:text-secondary-dark hover:bg-gray-200 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-light"
          aria-label="Close modal"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-64 object-cover rounded-t-lg"
        />

        <div className="p-6 md:p-8">
          <div className="mb-4">
            <span className="text-sm font-semibold bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark py-1 px-3 rounded-full">
              {event.year}
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">{event.title}</h2>
          <p className="text-base text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};
