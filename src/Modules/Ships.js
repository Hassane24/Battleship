function ships(name, length) {
  const ship = {
    name,
    length,
    hits: [],
    sunken: false,
  };

  const getName = () => {
    return ship.name;
  };
  const getLength = () => {
    return ship.length;
  };
  const getHits = () => {
    return ship.hits;
  };
  const shipState = () => {
    return ship.sunken;
  };

  const hit = () => {
    ship.hits.push("hit");
    isSunk();
  };

  const isSunk = () => {
    if (ship.hits.length == ship.length) return (ship.sunken = true);
  };

  return { getLength, getName, getHits, shipState, hit, isSunk };
}

export { ships };
