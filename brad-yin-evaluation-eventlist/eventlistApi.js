const EVENTLIST_API_URL = "http://localhost:3000/events";

const fetchEvent = async () => {
    const res = await fetch(EVENTLIST_API_URL, { method: "GET" });
    return res.json();
};