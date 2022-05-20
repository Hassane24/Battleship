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
  const changeAxis = document.querySelector(".axis");
  const startButton = document.querySelector(".start");
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
      for (let i = 0; i < shipToPlace.getLength(); i++) {
        location.push(coordinate + i * 10);
      }
    return location;
  };

  const checkForValidPlacement = (locationArray) => {
    const collisions = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
    if (
      collisions.some((num) => {
        return [num, num + 1].every((combination) =>
          locationArray.includes(combination)
        );
      })
    ) {
      return false;
    } else {
      return true;
    }
  };

  const renderShips = () => {
    const coordinates = Game.getPlayerShipLocations();
    coordinates.forEach((coordinate) => {
      const cell = document.querySelector(
        `.cell.empty[coordinate="${coordinate}"]`
      );
      cell.classList.add("placed");
    });
  };

  const changeOrientation = () => {
    if (axis === "horizontal") return (axis = "vert");
    else return (axis = "horizontal");
  };

  const startBattle = () => {
    const placeShipsText = document.querySelector(".place-ships-text");
    placeShipsText.remove();
    renderCpuBoard();
    cpuBoardContainer.classList.remove("hide");
    changeAxis.classList.add("hide");
    startButton.classList.add("hide");
    const cpuCells = cpuBoard.querySelectorAll(".empty.cell");
    cpuCells.forEach((cell) => cell.classList.add("shoot"));
    Game.placeCPUShips();
    const playerCells = playerBoard.querySelectorAll(".hover");
    playerCells.forEach((cell) => cell.classList.remove("hover"));
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

    playerBoard.addEventListener("mouseout", (e) => {
      if (Game.checkIfAllShipsArePlaced()) return;
      const cell = e.target;
      const startingPoint = Number(cell.getAttribute("coordinate"));
      const block = generateBlock(startingPoint);
      block.forEach((square) => {
        const cell = playerBoard.querySelector(
          `.empty.cell[coordinate="${square}"]`
        );
        if (cell) cell.classList.remove("hover");
      });
    });

    playerBoard.addEventListener("mouseover", (e) => {
      if (Game.checkIfAllShipsArePlaced()) return;
      const cell = e.target;
      if (cell.classList.contains("cell", "empty")) {
        const startingPoint = Number(cell.getAttribute("coordinate"));
        const block = generateBlock(startingPoint);
        if (!checkForValidPlacement(block)) return;
        block.forEach((square) => {
          const cell = playerBoard.querySelector(
            `.empty.cell[coordinate="${square}"]`
          );
          if (cell) cell.classList.add("hover");
        });
      }
    });

    playerBoard.addEventListener("click", (e) => {
      if (Game.checkIfAllShipsArePlaced()) return;
      const cell = e.target;
      if (cell.classList.contains("cell", "empty")) {
        const startingPoint = Number(cell.getAttribute("coordinate"));
        const block = generateBlock(startingPoint);
        if (!Game.isValidPlacement(block)) return;
        Game.placePlayerShips(startingPoint, axis);
        renderShips();
        shipToPlace = Game.getShipToPlace();
        if (Game.checkIfAllShipsArePlaced())
          startButton.classList.remove("hide");
      }
    });

    changeAxis.addEventListener("click", changeOrientation);

    startButton.addEventListener("click", startBattle);

    cpuBoard.addEventListener("click", (e) => {
      const cellToAttack = Number(e.target.getAttribute("coordinate"));
      if (Game.cpuWon()) return (container.textContent = "Computer Won");
      if (Game.playerWon()) return (container.textContent = "You won");
      console.log(e.target.classList);
      if (
        e.target.classList.contains("empty") &&
        !e.target.classList.contains("miss") &&
        !e.target.classList.contains("hit")
      ) {
        if (Game.playerRole()) {
          Game.playerAttack(cellToAttack);
          const playerHits = Game.getPlayerHits();
          const playerMisses = Game.getPlayerMisses();
          playerHits.forEach((hit) => {
            const hitCell = cpuBoard.querySelector(
              `.cell.empty[coordinate="${hit}"]`
            );
            hitCell.classList.add("hit");
          });
          playerMisses.forEach((miss) => {
            const hitCell = cpuBoard.querySelector(
              `.cell.empty[coordinate="${miss}"]`
            );
            hitCell.classList.add("miss");
          });
        }

        if (Game.cpuRole()) {
          Game.cpuAttack();
          const cpuHits = Game.getCpuHits();
          const cpuMisses = Game.getCpuMisses();
          cpuHits.forEach((hit) => {
            const hitCell = playerBoard.querySelector(
              `.cell.empty[coordinate="${hit}"]`
            );
            hitCell.classList.remove("placed");
            hitCell.classList.add("hit");
          });
          cpuMisses.forEach((miss) => {
            const hitCell = playerBoard.querySelector(
              `.cell.empty[coordinate="${miss}"]`
            );
            hitCell.classList.add("miss");
          });
        }
      }
    });
  };
  return { bindEvents };
}

export { displayController };
