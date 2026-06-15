// script.js - Member 15: Ultra Animations + Member 9: Responsive Hamburger Menu

const members = [ /* ... your members array ... */ ];

// Theme Toggle (Unchanged)
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
            <div class="profile-image-container">
                <img src="${member.image}"
                     alt="${member.name}"
                     class="profile-img"
                     onerror="this.src='https://via.placeholder.com/150?text=No+Image';">
            </div>
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

// ======================
// Hamburger Menu - Added by Member 9 (Responsive Navigation)
// ======================
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    displayMembers();
    typeHeader();
    initScrollAnimations();
    initHamburgerMenu();           // ← Added for responsive nav
    setTimeout(launchConfetti, 800); // Remove this line if you don't want confetti
});
