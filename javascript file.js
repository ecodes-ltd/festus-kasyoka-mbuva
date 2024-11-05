function startCountdown(targetDate) {
    const countdownElement = document.getElementById('timer');
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Event Started!";
        }
    }, 1000);
}

startCountdown("2024-11-10T00:00:00"); // Example start date for countdown

// Show the selected tab content and hide others
function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none'; // Hide all tab content by default
    });

    // Display the selected tab content
    document.getElementById(tabId).style.display = 'block';
}

// Display the volunteer form on button click
function displayVolunteerForm() {
    const form = document.getElementById('volunteer-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Handle Join the Movement Form Submission
document.getElementById("movement-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("movement-status").textContent = "Thank you for joining the movement! We’ll keep you updated.";
    this.reset();
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-status").textContent = "Your message has been sent successfully!";
    this.reset();
});

// Volunteer Form Submission
document.getElementById("volunteer-signup").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("volunteer-status").textContent = "Thank you for signing up as a volunteer!";
    this.reset();
});

// Load Events when the page loads
window.onload = function() {
    showTab('pools'); // Show Pools tab by default
};
