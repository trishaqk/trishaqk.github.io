export interface Event {
    eventName: string;
    start: string;
    areaName: string;
    venueName: string;
}

export interface EventData {
    events: Event[];
}