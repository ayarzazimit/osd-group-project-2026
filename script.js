// script.js - Member 15: Next Level Animations

const members = [
    {
        name: "Abubakar Yahaya Zimit",
        username: "ayarzamit",
        role: "Group Leader",
        contribution: "Project Setup & Coordination"
    },
    {
        name: "Idris Maikano Idris",
        username: "Maikano47",
        role: "Group Member",
        contribution: "Profile Card Added | Reg No: CIS/STE/22/1017"
    },
    {
        name: "Member Full Name 3",
        username: "githubusername3",
        role: "Group Member",
        contribution: "Added my profile card"
    }
    // Add more members here...
];

const button = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Theme Toggle with animation re-trigger
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    // Re-trigger animations after theme change
    setTimeout(initScrollAnimations, 400);
});

// Typing Effect for Header
function typeHeader() {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.classList.add('typing');
    }
}

// Display Members with dynamic delay
function displayMembers() {
    const grid = document.getElementById('membersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    members.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.style.animationDelay = `${0.15 + index * 0.12}s`;
        
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>GitHub:</strong> <a href="https://github.com/${member.username}" target="_blank">@${member.username}</a></p>
            <p><strong>Role:</strong> ${member.role}</p>
            <p><strong>Contribution:</strong> ${member.contribution}</p>
        `;
        grid.appendChild(card);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.member-card, .skills-section, #contact, h2, .skill-badge').forEach(el => {
        observer.observe(el);
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    displayMembers();
    typeHeader();
    initScrollAnimations();
});
