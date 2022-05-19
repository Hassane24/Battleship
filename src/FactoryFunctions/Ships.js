function ships(name, length) {
  const ship = {
    name,
    length,
    hits: [],
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

  const hit = () => {
    ship.hits.push("hit");
  };

  const isSunk = () => {
    return ship.hits.length === ship.length;
  };

  return { getLength, getName, getHits, hit, isSunk };
}

export { ships };
