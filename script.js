const paperStyles = {
  "Utusan Malaysia": "utusan",
  "Utusan Sarawak": "utusan",
  "Utusan Borneo": "utusan",
  "The Star": "star",
  "Berita Harian": "berita",
  "Harian Metro": "metro",
  "Kosmo!": "kosmo",
  "Sinar Harian": "sinar",
  "China Press": "china",
  "Sin Chew Daily": "sinchew",
  "Tamil Nesan": "tamil",
  "Tamil Murasu": "tamil",
  "The Borneo Post": "borneo",
  "Melaka Hari Ini": "melaka",
  "Daily Express": "daily",
  "Harakah Daily": "berita",
  "See Hua Daily News": "sinchew"
};

const paperLinks = {
  "Utusan Malaysia": "https://www.utusan.com.my",
  "Utusan Sarawak": "https://www.utusansarawak.com.my",
  "Utusan Borneo": "https://www.utusanborneo.com.my",
  "The Star": "https://www.thestar.com.my",
  "Berita Harian": "https://www.bharian.com.my",
  "Harian Metro": "https://www.hmetro.com.my",
  "Kosmo!": "https://www.kosmo.com.my",
  "Sinar Harian": "https://www.sinarharian.com.my",
  "China Press": "https://www.chinapress.com.my",
  "Sin Chew Daily": "https://www.sinchew.com.my",
  "Tamil Nesan": "https://www.tamilnesan.com.my",
  "Tamil Murasu": "https://tamilmurasu.com.my",
  "The Borneo Post": "https://www.theborneopost.com",
  "Melaka Hari Ini": "https://www.melakahariini.my",
  "Daily Express": "https://www.dailyexpress.com.my",
  "Harakah Daily": "https://www.harakahdaily.net",
  "See Hua Daily News": "https://www.seehua.com"
};

const statePapers = {
  "Perlis": ["Utusan Malaysia", "Berita Harian", "Harian Metro", "Kosmo!", "Sin Chew Daily"],
  "Kedah": ["Berita Harian", "Utusan Malaysia", "Harian Metro", "Kosmo!", "Sin Chew Daily"],
  "Penang": ["The Star", "Sin Chew Daily", "China Press", "Tamil Murasu", "Berita Harian"],
  "Perak": ["Sinar Harian", "Utusan Malaysia", "Sin Chew Daily", "China Press", "Tamil Nesan"],
  "Selangor": ["Utusan Malaysia", "The Star", "Sin Chew Daily", "Tamil Murasu", "Harian Metro"],
  "Negeri Sembilan": ["Utusan Malaysia", "Kosmo!", "Sin Chew Daily", "Tamil Nesan", "Berita Harian"],
  "Melaka": ["Melaka Hari Ini", "Utusan Malaysia", "Berita Harian", "Sin Chew Daily", "China Press"],
  "Johor": ["Utusan Malaysia", "Sin Chew Daily", "Tamil Murasu", "The Star", "Kosmo!"],
  "Pahang": ["Kosmo!", "Utusan Malaysia", "Sinar Harian", "China Press", "Berita Harian"],
  "Terengganu": ["Utusan Malaysia", "Berita Harian", "Kosmo!", "Harian Metro", "Sin Chew Daily"],
  "Kelantan": ["Utusan Malaysia", "Sinar Harian", "Kosmo!", "Sin Chew Daily", "Harakah Daily"],
  "Sarawak": ["Utusan Sarawak", "The Borneo Post", "Utusan Borneo", "Sin Chew Daily", "China Press", "Tamil Nesan", "The Star", "Harian Metro", "Berita Harian", "See Hua Daily News"],
  "Sabah": ["Daily Express", "Utusan Borneo", "The Borneo Post", "Sin Chew Daily", "China Press", "Berita Harian", "Harian Metro", "The Star"],
  "Kuala Lumpur": ["Utusan Malaysia", "The Star", "Berita Harian", "Kosmo!", "Sin Chew Daily", "China Press", "Tamil Nesan", "Harian Metro"],
  "Labuan": ["Utusan Malaysia", "The Borneo Post", "Daily Express", "Sin Chew Daily", "China Press"]
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "givemethemoney") {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".news-section").style.display = "block";
  } else {
    alert("Incorrect login!");
  }
}

function loadNews() {
  const state = document.getElementById("stateSelect").value;
  const container = document.getElementById("paperLinks");
  container.innerHTML = "";

  if (statePapers[state]) {
    const heading = document.createElement("h3");
    heading.innerText = "Available Newspapers:";
    container.appendChild(heading);

    statePapers[state].forEach(name => {
      const button = document.createElement("button");
      button.className = `paper-button ${paperStyles[name] || ''}`;
      button.innerText = name;
      if (paperLinks[name]) {
        button.onclick = () => window.open(paperLinks[name], '_blank');
      } else {
        button.onclick = () => alert("Link tidak tersedia untuk: " + name);
      }
      container.appendChild(button);
    });
  }
}