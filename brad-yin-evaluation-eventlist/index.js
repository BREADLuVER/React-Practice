
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
        this.eventsList = document.querySelector(".events-list");
        this.newEventForm = document.querySelector(".new-event-form");
        this.newEventTitle = document.querySelector("#new-event-title");
        this.newEventStart = document.querySelector("#new-event-start");
        this.newEventEnd = document.querySelector("#new-event-end");
        this.addEventBtn = document.querySelector(".add-event-btn");

        this.addEventBtn.addEventListener("click", () => {
            this.newEventForm.style.display = "block";
        });
    }

    renderTodos(todos) {
        this.todosList.innerHTML = "";
        for (const todo of todos) {
          this.addTodo(todo);
        }
    }

    addEvent(newEvent) {
        const { id, title, startDate, endDate } = newEvent;
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.id = `event-${id}`;
        eventElement.innerHTML = `
            <span class="event__title">${title} (${startDate} - ${endDate})</span>
            <button class="event__delete">Delete</button>
        `;
        this.eventsList.appendChild(eventElement);
    }

    removeEvent(eventId) {
        const eventElement = document.getElementById(`event-${eventId}`);
        if (eventElement) eventElement.remove();
    }
}