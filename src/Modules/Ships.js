function ships(name, position) {
  let sunken = false;
  let length = position.length;
  let hits = [];
  const hit = (index) => {
    hits[index] = "hit";
  };

  const isSunk = () => {
    if (length == 0) return (sunken = true);
    hits.forEach((hit, i) => {
      position.forEach((cell, j) => {
        if (hit == "hit" && cell[j] == i) length -= 1;
      });
    });
  };

  return { name, position, hits, sunken };
}

export { ships };
