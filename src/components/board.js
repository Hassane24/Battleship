function board(name) {
  const boardContainer = document.createElement("div");
  if (name === undefined) boardContainer.classList.add("cpu-board");
  else boardContainer.classList.add("player-board");
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  boardContainer.appendChild(nameSpan);
  const boardDiv = document.createElement("div");
  boardDiv.classList.add("board");
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("empty");
    cell.setAttribute("id", i);
    boardDiv.appendChild(cell);
  }
  boardContainer.appendChild(boardDiv);
  return boardContainer;
}
