
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { EventModal } from './components/EventModal';
import { events as eventData } from './data/events';
import type { TimelineEvent, Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleEventClick = useCallback((event: TimelineEvent) => {
    setSelectedEvent(event);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  return (
    <div className="min-h-screen font-sans text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-sky-700 dark:from-primary-dark dark:to-sky-300">A Journey Through Time</h1>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Explore pivotal moments in history.</p>
        </div>
        <Timeline events={eventData} onEventClick={handleEventClick} />
      </main>
      <EventModal event={selectedEvent} onClose={closeModal} />
    </div>
  );
}

export default App;
