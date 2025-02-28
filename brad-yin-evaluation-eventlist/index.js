import { fetchEvent, addEvent, updateEvent, patchEvent, deleteEvent } from "./eventlistApi.js";

class EventlistModel {
    #events;
    constructor() {
        this.#events = []
    }

    setEvents(events) {
        this.#events=events
    }

    getEvents(){
        return this.#events
    }

    addEvent(event) {
        this.#events.push(event)
    }

    updateEvent(eventID, updateEvent) {
        this.#events = this.#events.map(event => {
            event.id === eventID ? updateEvent : event
        })
    }

    removeEvent(eventID) {
        this.#events = this.#events.filter(event => event.id !== eventID)
    }
}

class EventlistView {
    constructor() {
        
    }
}