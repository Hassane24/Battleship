import { board } from "../components/board";
import { game } from "./game";

function displayController() {
  const nameScreen = document.querySelector(".player-name");
  const nameInput = document.querySelector("#name");
  const playerName = document.querySelector(".player-board > span");
  const playButton = document.querySelector(".player-name > button");
  const boardContainer = document.querySelector(".board-container");
  const playerBoard = document.querySelector(".player-board > .board");
  const playerBoardContainer = document.querySelector(".player-board ");
  const cpuBoard = document.querySelector(".cpu-board > .board");
  const cpuBoardContainer = document.querySelector(".cpu-board ");
  const container = document.querySelector(".container");
  let Game = game(nameInput.value);
  let axis = "horizontal";
  let shipToPlace = Game.getShipToPlace();

  const renderPlayerBoard = () => {
    for (let i = 0; i < 100; i++) {
      const cell = board(i);
      playerBoard.appendChild(cell);
    }
  };

  const renderCpuBoard = () => {
    for (let i = 0; i < 100; i++) {
      const cell = board(i);
      cpuBoard.appendChild(cell);
    }
  };

  const generateBlock = (coordinate) => {
    const location = [];
    if (axis === "horizontal")
      for (let i = 0; i < shipToPlace.getLength(); i++) {
        location.push(coordinate + i);
      }
    else
      for (let i = 0; i < array.length; i++) {
        location.push(coordinate + i * 10);
      }
    return location;
  };

  const placePlayerShips = (e) => {
    if (Game.checkIfAllShipsArePlaced()) return;
    const cell = e.target;
    if (cell.classList.contains("empty") && cell.classList.contains("cell")) {
      const startingPos = cell.getAttribute("id");
      if (!Game.isValidPlacement(Game.placePlayerShips(startingPos, axis)))
        return;
      Game.placePlayerShips(startingPos, axis);
      renderShips();
      shipToPlace = Game.getShipToPlace;
    }
  };

  const renderShips = () => {
    const coordinates = Game.getPlayerShipLocations();
    coordinates.forEach((coordinate) => {
      const cell = document.querySelector(`.cell.empty#${coordinate}`);
      cell.classList.remove("empty");
      cell.classList.add("hit");
    });
  };

  const bindEvents = () => {
    playButton.addEventListener("click", () => {
      if (nameInput.value == "") return;
      playerBoardContainer.classList.remove("hide");
      playerName.textContent = nameInput.value;
      renderPlayerBoard();
      nameScreen.remove();
      const placeShipsText = document.createElement("div");
      placeShipsText.classList.add("place-ships-text");
      placeShipsText.textContent = "Place your ships";
      container.appendChild(placeShipsText);
    });

    playerBoard.addEventListener("mouseover", (e) => {
      const cell = e.target;
      const startingPos = cell.getAttribute("coordinate");
      const block = generateBlock(startingPos);
      console.log(block);
      block.forEach((square) => {
        const cell = playerBoard.querySelector(
          `.empty.cell[coordinate="${square}"]`
        );
        if (cell) cell.style.backgroundColor = "yellow";
      });
    });
  };
  return { bindEvents };
}

export { displayController };
