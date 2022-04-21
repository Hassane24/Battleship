function ships(name, length) {
  const ship = {
    name,
    length,
    position: new Array(length).fill(null),
    sunken: false,
  };

  const getName = () => {
    return ship.name;
  };
  const getLength = () => {
    return ship.length;
  };
  const getPosition = () => {
    return ship.position;
  };
  const shipState = () => {
    return ship.sunken;
  };

  const hit = (index) => {
    ship.position[index] = "hit";
  };

  const isSunk = () => {
    if (ship.position.every((pos) => pos == "hit")) ship.sunken = true;
  };

  return { getLength, getName, getPosition, shipState, hit, isSunk };
}

export { ships };
