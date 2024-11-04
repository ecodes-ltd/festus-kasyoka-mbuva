// Simulate fetching event data
const events = [
    { name: "Annual Sports Tournament", date: "2023-12-15" },
    { name: "Education Sponsorship Deadline", date: "2024-01-10" },
    { name: "Community Clean-Up Day", date: "2024-02-05" }
];

function loadEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - Date: ${event.date}`;
        eventList.appendChild(listItem);
    });
}

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-status").textContent = "Message sent successfully!";
    this.reset();
});

// Donation Simulation
function donate() {
    alert("Thank you for your support! Your donation will help empower Mbooni.");
}

// Load Events on Page Load
window.onload = loadEvents;
