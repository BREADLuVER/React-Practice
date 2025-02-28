
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
}