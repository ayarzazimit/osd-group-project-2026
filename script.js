// script.js

const members = [
    {
        name: "Abubakar Yahaya Zimit",
        username: "ayarzamit",
        role: "Group Leader",
        contribution: "Project Setup & Coordination",
        image: "FB_IMG_16571174304510747.jpg"        // ← Your uploaded image
    },
    {
        name: "Idris Maikano Idris",
        username: "Maikano47",
        role: "Group Member",
        contribution: "Profile Card Added | Reg No: CIS/STE/22/1017",
        image: "https://via.placeholder.com/150?text=IMI"   // Change later
    },
    {
        name: "Member Full Name 3",
        username: "githubusername3",
        role: "Group Member",
        contribution: "Added my profile card",
        image: "https://via.placeholder.com/150?text=M3"    // Change later
    }
    // Add more members...
];

// === Keep the rest of the code the same (theme toggle + displayMembers function) ===
const button = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

function displayMembers() {
    const grid = document.getElementById('membersGrid');
    if (!grid) return;

    grid.innerHTML = '';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
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

document.addEventListener('DOMContentLoaded', displayMembers);
