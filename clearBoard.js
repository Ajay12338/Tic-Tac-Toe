const clearBoard = (divs) => {
  for (const id of divs) {
    document.getElementById(id).innerText = null;
  }
};

export default clearBoard;
