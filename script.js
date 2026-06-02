const members = [
    {
        name: "Abubakar Yahaya Zimit",
        username: "ayarzamit",
        role: "Group Leader",
        contribution: "Project Setup & Coordination"
    },
    // ================= ADD YOUR DETAILS BELOW =================
    // Copy the format below and add your info before the last ];

    {
        name: "Muhammad Al-ghazali Jalo",
        username: "jalomoha",
        role: "Group Member 11",
        contribution: "Added dark-mode"
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

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

windows.matchMedia('(prefers-color-scheme: dark').matches

function displayMembers() {
    const grid = document.getElementById('membersGrid');
    grid.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>${member.role}</strong></p>
            <p>${member.contribution}</p>
            <a href="https://github.com/${member.username}" target="_blank" class="github-link">
                @${member.username}
            </a>
        `;
        grid.appendChild(card);
    });
}

window.onload = displayMembers;
