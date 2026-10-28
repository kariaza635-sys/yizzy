/*
  YIZZY BEATS — EDIT YOUR FIVE BEAT SLOTS HERE.
  1) Put each audio file in assets/beats/
  2) Put each cover image in assets/covers/
  3) Replace audio and cover below with the matching file paths.
  Example: audio: "assets/beats/my-beat.mp3", cover: "assets/covers/my-cover.jpg"
*/
const beats = [
  { title: "Beat Slot 01", type: "Add your genre · BPM", price: "Ask for price", audio: "", cover: "" },
  { title: "Beat Slot 02", type: "Add your genre · BPM", price: "Ask for price", audio: "", cover: "" },
  { title: "Beat Slot 03", type: "Add your genre · BPM", price: "Ask for price", audio: "", cover: "" },
  { title: "Beat Slot 04", type: "Add your genre · BPM", price: "Ask for price", audio: "", cover: "" },
  { title: "Beat Slot 05", type: "Add your genre · BPM", price: "Ask for price", audio: "", cover: "" }
];

const grid = document.getElementById("beatsGrid");
let currentAudio = null;
let currentButton = null;

beats.forEach((beat, index) => {
  const card = document.createElement("article");
  card.className = "beat-card";
  const coverContents = beat.cover
    ? `<img src="${beat.cover}" alt="${beat.title} cover art">`
    : `<div class="cover-mark">YB</div>`;
  const hasAudio = Boolean(beat.audio);
  card.innerHTML = `
    <div class="cover">
      ${coverContents}
      <span class="beat-index">BEAT / ${String(index + 1).padStart(2, "0")}</span>
      <span class="beat-status">${hasAudio ? "PREVIEW READY" : "COMING SOON"}</span>
    </div>
    <div class="beat-info">
      <div class="beat-title-row"><h3 class="beat-title">${beat.title}</h3><span class="beat-price">${beat.price}</span></div>
      <p class="beat-type">${beat.type}</p>
      <div class="beat-controls">
        <button class="play-button" type="button" aria-label="Preview ${beat.title}" ${hasAudio ? "" : "disabled"}>${hasAudio ? "▶" : "·"}</button>
        <div class="audio-area"><span class="audio-label">${hasAudio ? "Listen to preview" : "Audio coming soon"}</span><span class="audio-hint">${hasAudio ? "Tap to play / pause" : "Beat slot ready for your file"}</span></div>
        <a class="beat-contact" href="mailto:Yizzybeats1@gmail.com?subject=${encodeURIComponent("Beat enquiry: " + beat.title)}">ENQUIRE ↗</a>
      </div>
    </div>`;
  grid.appendChild(card);

  const button = card.querySelector(".play-button");
  if (hasAudio) {
    button.addEventListener("click", () => {
      if (currentAudio && currentButton === button) {
        if (currentAudio.paused) { currentAudio.play(); button.textContent = "Ⅱ"; }
        else { currentAudio.pause(); button.textContent = "▶"; }
        return;
      }
      if (currentAudio) { currentAudio.pause(); if (currentButton) currentButton.textContent = "▶"; }
      currentAudio = new Audio(beat.audio);
      currentButton = button;
      currentAudio.addEventListener("ended", () => { button.textContent = "▶"; });
      currentAudio.play().then(() => { button.textContent = "Ⅱ"; }).catch(() => {
        button.textContent = "▶";
        alert("Couldn't play this file. Check the audio path in script.js.");
      });
    });
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
