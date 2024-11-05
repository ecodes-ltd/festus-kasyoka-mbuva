// Countdown Timer Function
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

// Initialize Countdown (Example Date)
startCountdown("2024-11-10T00:00:00"); // Replace with your event date

// Tab Switching for Events Section
function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none'; // Hide all tab content by default
    });
    document.getElementById(tabId).style.display = 'block'; // Show selected tab
}

// Display the Volunteer Form
function displayVolunteerForm() {
    const form = document.getElementById('volunteer-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Register Now Form Submission Handling
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const idNumber = document.getElementById("id-number").value;
    const tel = document.getElementById("tel").value;

    if (name && idNumber && tel) {
        document.getElementById("register-status").textContent = "Thank you for registering with Team FKM! We’ll keep you updated.";
        this.reset(); // Clear the form
    } else {
        document.getElementById("register-status").textContent = "Please fill in all required fields.";
    }
});

// Contact Form Submission Handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-status").textContent = "Your message has been sent successfully!";
    this.reset();
});

// Volunteer Form Submission Handling
document.getElementById("volunteer-signup").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("volunteer-status").textContent = "Thank you for signing up as a volunteer!";
    this.reset();
});

// Set default tab when the page loads
window.onload = function() {
    showTab('pools'); // Show Pools tab by default in the Events section
};
