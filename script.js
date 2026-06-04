const members = [
  {
    name: "Abubakar Yahaya Zimit",
    username: "ayarzamit",
    role: "Group Leader",
    contribution: "Project Setup & Coordination"
  },

  // ================= ADD YOUR DETAILS BELOW =================

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
      <p><strong>GitHub:</strong> ${member.username}</p>
      <p><strong>Role:</strong> ${member.role}</p>
      <p><strong>Contribution:</strong> ${member.contribution}</p>
    `;

    grid.appendChild(card);
  });
}
