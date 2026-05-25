
const members = [
    {
        name: "Abubakar Yahaya Zimit",
        username: "ayarzamit",
        role: "Group Leader",
        contribution: "Project Setup & Coordination"
    }
    // Other 17 members will add their info here
];

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
