import { useState } from "react";
 
function EventProject() {
    const [events, setEvents] = useState([
        {
          id: 1,
          name: "React Workshop",
          date: "2024-12-15",
          location: "New Delhi",
          category: "Workshop",
          description: "react course",
          remainingSpots: 5,
        },
        {
          id: 2,
          name: "Tech Conference",
          date: "2024-12-20",
          location: "Mumbai",
          category: "Conference",
          description: "learn technology",
          remainingSpots: 3,
        },
      ]);

      const [registeredEvents, setRegisteredEvents] = useState([]);
  const [filters, setFilters] = useState({ category: "", location: "", date: "" });


  const handleRegister = (id) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id && event.remainingSpots > 0 ? { ...event, remainingSpots: event.remainingSpots - 1 } : event
      )
    );
 
    const event = events.find((e) => e.id === id);
    if (event && !registeredEvents.includes(event)) {
      setRegisteredEvents([...registeredEvents, event]);
    }
  };
    
  
  return (
    <div>
      <h1>Event Management System</h1>

      <div className="filter-container">
        <select
          className="filter-input"
          onChange={(e) => setFilters({ ...filters, category: e.target.value })} >
         <option value="">All Categories</option>
        <option value="Workshop">Workshop</option>
        <option value="Conference">Conference</option>
        </select>
        </div>

        <input
          type="text"
          className="filter-input"
          placeholder="Filter by location, category"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
 
        <input
          type="date"
          className="filter-input"
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />

<h2 className="subheader">Events</h2>
      {filteredEvents.map((event) => (
<div key={event.id} className="event-card">
<h3>{event.name}</h3>
<p>Date: {event.date}</p>
<p>Location: {event.location}</p>
<p>Category: {event.category}</p>
<p>Spots Left: {event.remainingSpots}</p>
<p>Description: {event.description}</p>
<button
            className="register-button"
            onClick={() => handleRegister(event.id)}
            disabled={event.remainingSpots === 0}
>
            {event.remainingSpots > 0 ? "Register" : "Fully Booked"}
</button>
</div>
      ))}
      <h2 className="subheader">Your Registered Events</h2>
      {registeredEvents.length > 0 ? (
<ul className="registered-list">
          {registeredEvents.map((event) => (
<li key={event.id} className="registered-item">
              {event.name} - {event.date}
</li>
          ))}
</ul>
      ) : (
<p>No registered events.</p>
      )}

    </div>
  )
}
 
export default EventProject
