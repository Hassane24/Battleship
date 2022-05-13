function startingScreen() {
  const playerNameContainer = document.createElement("div");
  playerNameContainer.classList.add("player-name");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Choose your name";
  playerNameContainer.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("autocomplete", "off");
  playerNameContainer.appendChild(nameInput);
  const playButton = document.createElement("button");
  playButton.textContent = "Play";
  playerNameContainer.appendChild(playButton);
  return playerNameContainer;
}
export { startingScreen };
