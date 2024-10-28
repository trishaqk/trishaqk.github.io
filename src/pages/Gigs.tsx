// src/components/Gigs.tsx
import React, { useEffect, useState } from 'react';
import { EventData, Event } from '../types/EventData';

interface EventsByYearAndMonth {
    year: string;
    months: { [month: string]: Event[] };
}

const Gigs: React.FC = () => {
    const [eventsByYearAndMonth, setEventsByYearAndMonth] = useState<EventsByYearAndMonth[]>([]);
    const [currentYearIndex, setCurrentYearIndex] = useState(0);
    const [expandedMonths, setExpandedMonths] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        // Fetch JSON data from the public directory
        fetch('/datasets/ra_dump_2014-10-28')
            .then(response => response.json())
            .then((data: EventData[]) => {
                if (data.length > 0 && data[0].events) {
                    // Sort events in reverse chronological order and group by year and month
                    const sortedEvents = data[0].events.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

                    // Group events by year and month
                    const eventsGroupedByYearAndMonth = sortedEvents.reduce((acc: EventsByYearAndMonth[], event) => {
                        const [year] = event.start.split('T')[0].split('-');
                        const month = new Date(event.start).toLocaleString('en-US', { month: 'long' }).toLowerCase(); // Lowercase month

                        let yearGroup = acc.find(group => group.year === year);
                        if (!yearGroup) {
                            yearGroup = { year, months: {} };
                            acc.push(yearGroup);
                        }

                        if (!yearGroup.months[month]) {
                            yearGroup.months[month] = [];
                        }
                        yearGroup.months[month].push(event);

                        return acc;
                    }, []);

                    setEventsByYearAndMonth(eventsGroupedByYearAndMonth);
                }
            })
            .catch(error => console.error("Error fetching JSON data:", error));
    }, []);

    // Handle year change for pagination
    const handleYearChange = (newIndex: number) => {
        setCurrentYearIndex(newIndex);
    };

    // Toggle month expansion
    const toggleMonthExpansion = (month: string) => {
        setExpandedMonths(prev => ({ ...prev, [month]: !prev[month] }));
    };

    const totalYears = eventsByYearAndMonth.length;
    // number of events per year
    const totalEventsPerYear = eventsByYearAndMonth[currentYearIndex]?.months
        ? Object.values(eventsByYearAndMonth[currentYearIndex].months).flat().length
        : 0;

    return (
        <div className="flex flex-col justify-center items-center bg-black mt-5">
            <div className="gig-list">
                {eventsByYearAndMonth.length > 0 && (
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="mr-10">
                                <button
                                    onClick={() => handleYearChange(currentYearIndex + 1)}
                                    disabled={currentYearIndex === totalYears - 1}
                                    className="bg-green-500 text-white py-1 px-3 rounded disabled:opacity-50"
                                >
                                    previous year
                                </button>

                            </div>
                            <h2 className="text-4xl font-semibold">
                                {eventsByYearAndMonth[currentYearIndex].year} ({totalEventsPerYear} events)
                            </h2>
                            <div className="ml-10">
                                <button
                                    onClick={() => handleYearChange(currentYearIndex - 1)}
                                    disabled={currentYearIndex === 0}
                                    className="bg-green-500 text-white py-1 px-3 rounded disabled:opacity-50"
                                >
                                    next year
                                </button>
                            </div>
                        </div>

                        {Object.entries(eventsByYearAndMonth[currentYearIndex].months).map(([month, events], monthIndex) => (
                            <div key={monthIndex} className="month-group mb-4">
                                <h3
                                    className="text-xl font-semibold mb-2 cursor-pointer flex items-center"
                                    onClick={() => toggleMonthExpansion(month)}
                                >
                                    {expandedMonths[month] ? '-' : '+'}
                                    <span className="ml-2">{month}</span>
                                </h3>

                                {expandedMonths[month] && events.map((event, eventIndex) => (
                                    <div key={eventIndex} className="gig-card border p-4 mb-2">
                                        <h4 className="text-lg font-bold break-words max-w-xl">{event.eventName}</h4>
                                        <p>{event.venueName}, {event.areaName}</p>
                                    </div>
                                ))}
                                <hr className="h-px my-4 border-gray-800 border-dashed"></hr>
                            </div>

                        ))}
                        <div className="pagination mt-4 flex justify-center gap-4">
                            <span className="text-sm">page ({currentYearIndex + 1} of {totalYears})</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default Gigs;
