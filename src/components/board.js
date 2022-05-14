function board(id) {
  const cell = document.createElement("div");
  cell.classList.add("empty");
  cell.classList.add("cell");
  cell.setAttribute("id", `${id}`);
  return cell;
}
export { board };
