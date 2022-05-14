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
  const controlButtonsDiv = document.createElement("div");
  controlButtonsDiv.classList.add("control-buttons");
  const axisButton = document.createElement("button");
  axisButton.classList.add("axis");
  const startButton = document.createElement("button");
  startButton.classList.add("start");
  controlButtonsDiv.appendChild(axisButton);
  controlButtonsDiv.appendChild(startButton);
  boardContainer.appendChild(controlButtonsDiv);
  return boardContainer;
}
