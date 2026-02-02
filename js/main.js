document.addEventListener("DOMContentLoaded", () => {
  loadMatches();
  loadStandings();
});

function loadMatches() {
  fetch("./data/matches.json")
    .then(res => res.json())
    .then(matches => {
      const container = document.getElementById("matches");
      container.innerHTML = "";

      matches.forEach(m => {
        const div = document.createElement("div");
        div.className = "match";
        div.innerHTML = `
          <div class="teams">${m.home} vs ${m.away}</div>
          <div class="info">
            <span>${m.time}</span>
            <span class="score">${m.score}</span>
            <span class="status">${m.status}</span>
          </div>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Gagal load matches:", err);
    });
}

function loadStandings() {
  fetch("./data/standings.json")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("standings");
      if (!table) return;

      table.innerHTML = `
        <h2>${data.league}</h2>
        <table>
          <tr>
            <th>#</th><th>Team</th><th>P</th><th>GD</th><th>Pts</th>
          </tr>
          ${data.table.map(t => `
            <tr>
              <td>${t.pos}</td>
              <td>${t.team}</td>
              <td>${t.played}</td>
              <td>${t.gd}</td>
              <td>${t.pts}</td>
            </tr>
          `).join("")}
        </table>
      `;
    })
    .catch(err => {
      console.error("Gagal load standings:", err);
    });
}}

init()
