
import React from 'react';
import type { TimelineEvent } from '../types';
import { EventMarker } from './EventMarker';

interface TimelineProps {
  events: TimelineEvent[];
  onEventClick: (event: TimelineEvent) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ events, onEventClick }) => {
  return (
    <div className="relative">
      {/* The timeline's central line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-primary-light/30 dark:bg-primary-dark/30 transform -translate-x-1/2"></div>

      <div className="space-y-16">
        {events.map((event, index) => (
          <EventMarker 
            key={event.year} 
            event={event} 
            isOdd={index % 2 !== 0}
            onClick={() => onEventClick(event)}
          />
        ))}
      </div>
    </div>
  );
};
