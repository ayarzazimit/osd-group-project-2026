// script.js - Member 15: Ultra Animations

const members = [ /* ... your members array ... */ ];

const button = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    setTimeout(initScrollAnimations, 450);
});

// Typing Effect
function typeHeader() {
    const h1 = document.querySelector('h1');
    if (h1) h1.classList.add('typing');
}

// Display Members
function displayMembers() {
    const grid = document.getElementById('membersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    members.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.style.animationDelay = `${0.1 + index * 0.15}s`;
        
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>GitHub:</strong> <a href="https://github.com/${member.username}" target="_blank">@${member.username}</a></p>
            <p><strong>Role:</strong> ${member.role}</p>
            <p><strong>Contribution:</strong> ${member.contribution}</p>
        `;
        grid.appendChild(card);
    });
}

// Scroll + Progress Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.member-card, .skills-section, #contact, h2').forEach(el => {
        observer.observe(el);
    });
}

// Simple Confetti on Load (optional wow effect)
function launchConfetti() {
    if (typeof confetti === 'undefined') return;
    confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayMembers();
    typeHeader();
    initScrollAnimations();
    setTimeout(launchConfetti, 800);   // Remove this line if you don't want confetti
});
