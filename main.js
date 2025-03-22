// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        form.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
 
    // Open the modal and set the event name
    function openModal(eventName) {
        document.getElementById('registrationModal').style.display = 'block';
        document.getElementById('eventName').value = eventName;
    }

    // Close the modal
    function closeModal() {
        document.getElementById('registrationModal').style.display = 'none';
    }

    // Handle form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const eventName = document.getElementById('eventName').value;

        alert(`Thank you, ${name}! You have successfully registered for the event: ${eventName}.`);

        // Close the modal after submission
        closeModal();

        // Optionally, reset the form
        document.getElementById('registrationForm').reset();
    });

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('registrationModal');
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Open the subscription modal
    function openSubscriptionModal() {
        document.getElementById('subscriptionModal').style.display = 'block';
    }

    // Close the subscription modal
    function closeSubscriptionModal() {
        document.getElementById('subscriptionModal').style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('subscriptionModal');
        if (event.target === modal) {
            closeSubscriptionModal();
        }
    };

    // Upgrade subscription function
    function upgradeSubscription() {
        alert("Upgrade feature coming soon!");
    }
 
  // Show the scroll-to-top button when the user scrolls down
  window.onscroll = function () {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
} 
 
 
const events = [
    {
        name: "Web Development Workshop",
        date: "March 25, 2025",
        location: "Online",
        region: "North America",
        keywords: ["web", "development", "workshop"],
        image: "https://png.pngtree.com/background/20250103/original/pngtree-a-conceptual-illustration-of-web-design-development-and-seo-optimization-in-picture-image_13313953.jpg",
        detailsPage: "web-development-workshop.html"
    },
    {
        name: "AI and Machine Learning Summit",
        date: "April 10, 2025",
        location: "San Francisco, CA",
        region: "North America",
        keywords: ["ai", "machine learning", "summit"],
        image: "https://www.bennett.edu.in/wp-content/uploads/2024/10/Global-AI-Summit-25.jpg",
        detailsPage: "ai-ml-summit.html"
    },
    {
        name: "Cloud Computing Bootcamp",
        date: "May 5, 2025",
        location: "Online",
        region: "Asia",
        keywords: ["cloud", "computing", "bootcamp"],
        image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg",
        detailsPage: "cloud-computing-bootcamp.html"
    },
    {
        name: "Cybersecurity Conference",
        date: "June 15, 2025",
        location: "New York, NY",
        region: "Europe",
        keywords: ["cybersecurity", "conference", "security"],
        image: "https://www.shutterstock.com/image-vector/cyber-security-flyer-concepts-vector-600nw-2494499571.jpg",
        detailsPage: "cybersecurity-conference.html"
    },
    {
        name: "Robotics Workshop",
        date: "July 20, 2025",
        location: "Berlin, Germany",
        region: "Europe",
        keywords: ["robotics", "workshop", "ai"],
        image: "https://i.ytimg.com/vi/6DB7vYXgEoo/maxresdefault.jpg",
        detailsPage: "robotics-workshop.html"
    }
];

    // Function to display events based on the selected region
    function filterEventsByRegion() {
        const region = document.getElementById("regionSelect").value;
        const searchResults = document.getElementById("searchResults");

        // Clear previous results
        searchResults.innerHTML = "";

        // Filter events based on the selected region
        const filteredEvents = events.filter(event => region === "all" || event.region === region);

        // Display filtered events
        filteredEvents.forEach(event => {
            const eventCard = `
                <div class="event">
                    <img src="${event.image}" alt="${event.name}">
                    <h3>${event.name}</h3>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Region:</strong> ${event.region}</p>
                    <button class="btn" onclick="openModal('${event.name}')">Register Now</button>
                </div>
            `;
            searchResults.innerHTML += eventCard;
        });

        // Show a message if no events are found
        if (filteredEvents.length === 0) {
            searchResults.innerHTML = "<p>No events found for the selected region.</p>";
        }
    }

    // Display all events by default
    filterEventsByRegion();
 