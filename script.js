const items = [
{
  id: "strat1",
  category: "stratagems",
  name: "Orbital Precision Strike",
  description: "A single precise shot from the Destroyer's 'ATLAS' cannon. The Orbital Precision Strike, abbreviated as OPS, is a Stratagem in the Bridge category that fires a heavy-caliber artillery shell precisely at the Stratagem beacon.",
  image: "images/stratagems/orbitalprecisionstrikeimage.png",
  logo: "images/stratagems/orbitalprecisionstrike.png",
  notes: "The explosion of the shell inflicts tremendous damage, and is capable of instantly killing any non-heavy enemy within 4 meters of the impact point while also killing or greatly damaging anything within 12 meters. Additionally, if the shell itself impacts an enemy, it can kill anything smaller than a Factory Strider or Bile Titan. The heavy destructive force of the explosion also allows this Stratagem to be used to destroy objective buildings, giving it utility beyond simply killing enemies. With a low cooldown time that can be improved further with Ship Module upgrades, OPS can be available for regular use whenever the situation calls for it.",
  pros: ["Unlimited uses", "Short cooldown", "Good against stationary targets"],
  cons: ["Can be obstructed by obstacles", "Can cause friendly fire"]
},
{ 
  id: "strat2",
  category: "stratagems",
  name: "Orbital Gas Strike",
  description: "A projectile which releases a cloud of corrosive gas, harmful to both organic and robotic lifeforms. The Orbital Gas Strike is an offensive orbital Stratagem that disperses gas which damages, slows, and applies a confusion effect over a large area.",
  image: "images/stratagems/orbitalgasstrikeimage.png",
  logo: "images/stratagems/orbitalgasstrike.png",
  notes: "Confused enemies will wander around aimlessly and attack each other. Helldivers caught in the gas will constantly cough and have their vision obscured by the gas effect and the gas cloud. The gas released lingers for about 15 seconds before dissipating, during which time all smaller enemies will likely die, and medium enemies will either die or be severely damaged. Larger enemies will take damage, but their health pools are great enough that they are unlikely to perish outright. The Gas Strike can synergize with the Orbital EMS Strike, as well as other stunning and slowing effects, to significantly hinder enemies. The projectile itself can be used to destroy Bug Holes, Automaton Fabricators, and Bulk Fabricators, though this requires the beacon to be thrown directly onto the structure.",
  pros: ["Unlimited uses", "Lasts 15 seconds", "Short cooldown"],
  cons: ["Ineffective to large units", "Can cause friendly fire"]
},
{ 
  id: "strat3",
  category: "stratagems",
  name: "Orbital Gatling Barrage",
  description: "A projectile which releases a cloud of corrosive gas, harmful to both organic and robotic lifeforms. The Orbital Gas Strike is an offensive orbital Stratagem that disperses gas which damages, slows, and applies a confusion effect over a large area.",
  image: "images/stratagems/orbitalgatlingbarragestrikeimage.png",
  logo: "images/stratagems/orbitalgatlingbarragestrike.png",
  notes: "It fires a continuous, low-dispersion barrage of Anti-Tank I explosive shells over the course of about 9 seconds.  The barrage lasts ~9 seconds and bombards a ~20 meter radius. Its random targeting and relatively small explosion radius per shot mean it'll kill most, but not all enemies that pass through the area, and is not particularly likely to kill heavy targets, though it will likely damage them. The barrage can destroy light structures like fences and walls to aid a Helldiver's traversal and can be used to open steel-doored containers in a pinch. This barrage can be used to destroy mission objectives such as Illegal Broadcast Towers. The barrage can destroy Bug Holes albeit unreliably, Fabricators by having a minimum of 12 shots hit to destroy and Grounded Warp Ships taking down their shield before destroying it.",
  pros: ["Unlimited uses", "Lasts 9 seconds", "Short cooldown"],
  cons: ["Ineffective to large units", "Can cause friendly fire", "Cannot actively move to track enemies"]
},
{ 
  id: "strat4",
  category: "stratagems",
  name: "Orbital EMS Strike",
  description: "A projectile which releases a cloud of corrosive gas, harmful to both organic and robotic lifeforms. The Orbital Gas Strike is an offensive orbital Stratagem that disperses gas which damages, slows, and applies a confusion effect over a large area.",
  image: "images/stratagems/orbitalemsstrikeimage.png",
  logo: "images/stratagems/orbitalemsstrike.png",
  notes: "The shot is able to stun enemies like Chargers, allowing you to easily take them down. You can use this stratagem to stun problematic enemies such as chargers, Devastators, and Berserkers in order to easily dispatch them. You can use this stratagem in tandem with the Orbital Gas Strike, to make the gas strike more effective by stunning the enemy in place while the gas takes effect. The initial impact of the shot will stun most enemies caught in the radius for 15-17.5 seconds. The lingering cloud that is left behind will slow most enemies that walk into it and stun them if they remain inside for long enough. The projectile has a demolition force of 50 which is sufficient for destroying demolition force 50 structures such as Stratagem Jammers, Detector Towers, Bulk Fabricators, or unshielded Grounded Warp Ships.",
  pros: ["Unlimited uses", "Lasts 20 seconds", "Short cooldown"],
  cons: ["Ineffective to large units", "Can effect Helldivers"]
},
{ 
  id: "strat5",
  category: "stratagems",
  name: "Orbital 120MM HE Barrage",
  description: "A precision artillery salvo over a small area, perfect for taking out concentrated enemy units. The Orbital 120mm HE Barrage is an offensive stratagem which fires 5 salvos of 3 high-explosive shells, 0.5 seconds apart, with a pause between each salvo.",
  image: "images/stratagems/orbital120barrageimage.png",
  logo: "images/stratagems/orbital120barrage.png",
  notes: "The shot is able to stun enemies like Chargers, allowing you to easily take them down. You can use this stratagem to stun problematic enemies such as chargers, Devastators, and Berserkers in order to easily dispatch them. You can use this stratagem in tandem with the Orbital Gas Strike, to make the gas strike more effective by stunning the enemy in place while the gas takes effect. The initial impact of the shot will stun most enemies caught in the radius for 15-17.5 seconds. The lingering cloud that is left behind will slow most enemies that walk into it and stun them if they remain inside for long enough. The projectile has a demolition force of 50 which is sufficient for destroying demolition force 50 structures such as Stratagem Jammers, Detector Towers, Bulk Fabricators, or unshielded Grounded Warp Ships.",
  pros: ["Unlimited uses", "Lasts 20 seconds", "Short cooldown"],
  cons: ["Ineffective to large units", "Can effect Helldivers"]
},
];

const grid = document.getElementById("itemGrid");
const panel = document.getElementById("detailPanel");
const tabs = document.querySelectorAll(".tab");

let currentItemId = null;
let bookmarks = [];

// Render cards
function renderGrid(category = "all") {
  grid.innerHTML = "";

  let filteredItems;
  if (category === "bookmarks") {
    filteredItems = items.filter(i => bookmarks.includes(i.id));
  } else {
    filteredItems = items.filter(i => category === "all" || i.category === category);
  }

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-title">${item.name}</div>
    `;
    card.onclick = () => showDetail(item, card);
    grid.appendChild(card);
  });
}

// Show details
function showDetail(item, card) {
  if (currentItemId === item.id) return; // prevent duplicate transition
  currentItemId = item.id;

  document.querySelectorAll(".item-card").forEach(c => c.classList.remove("active"));
  card.classList.add("active");

  panel.classList.remove("active");
  setTimeout(() => {
    const isBookmarked = bookmarks.includes(item.id);

    panel.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="detail-image">

      <div class="detail-header">
        <div class="yellow-line"></div>
        <div>
          <div class="detail-header-content">
            <img src="${item.logo}" alt="logo" class="detail-logo">
            <h2 class="detail-title">${item.name}</h2>
          </div>
          <p class="detail-description">${item.description}</p>
        </div>
      </div>

      <div class="info-boxes">
        <div class="info-box">
          <h3>Notes</h3>
          <div class="info-list">${item.notes || "No notes."}</div>
        </div>
        <div class="info-box">
          <h3>${getInfoLabel(item)}</h3>
          <div class="info-list">
            ${item.info ? item.info.map(i => `<div>- ${i}</div>`).join("") : ""}
            ${item.pros ? item.pros.map(p => `<div class="pro">+ ${p}</div>`).join("") : ""}
            ${item.cons ? item.cons.map(c => `<div class="con">- ${c}</div>`).join("") : ""}
          </div>
        </div>
      </div>

      <button class="bookmark-btn" id="bookmarkBtn" onclick="toggleBookmark('${item.id}')">
        ${isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
      </button>
    `;
    panel.classList.add("active");
  }, 150);
}

function getInfoLabel(item) {
  switch (item.category) {
    case "enemies": return "Tactical Info";
    case "planets": return "Sitrep";
    case "stratagems": return "Abilities";
    default: return "Info";
  }
}

// Toggle bookmark
function toggleBookmark(id) {
  const btn = document.getElementById("bookmarkBtn");
  if (!btn) return;

  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
    btn.textContent = "Add Bookmark";
  } else {
    bookmarks.push(id);
    btn.textContent = "Remove Bookmark";
  }

  // Re-render if in bookmarks tab
  const activeTab = document.querySelector(".tab.active").dataset.category;
  if (activeTab === "bookmarks") renderGrid("bookmarks");
}

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderGrid(tab.dataset.category);
  });
});

// Init
renderGrid();
