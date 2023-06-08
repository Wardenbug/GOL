class Cell {
  isAlive: boolean = false;
  col: number;
  row: number;

  constructor(col: number, row: number, isAlive: boolean) {
    this.col = col;
    this.row = row;
    this.isAlive = isAlive;
  }
  countNeighbours(grid: Cell[][]) {
    let counter = 0;

    if (this.col - 1 > -1 && grid[this.row][this.col - 1].isAlive) {
      counter++;
    }
    if (this.col + 1 < 10 &&  grid[this.row][this.col + 1].isAlive) {
      counter++;
    }
    if (this.row + 1 < 10 && grid[this.row + 1][this.col].isAlive) {
      counter++;
    }
    if (this.row - 1 > -1 && grid[this.row - 1][this.col].isAlive) {
      counter++;
    }
    if (this.col - 1 > -1 && this.row + 1 < 10 && grid[this.row + 1][this.col - 1].isAlive) {
      counter++;
    }
    if (this.col + 1 < 10 && this.row + 1 < 10 && grid[this.row + 1][this.col + 1].isAlive) {
      counter++;
    }
    if (this.row - 1 > -1 && this.col - 1 > -1 && grid[this.row - 1][this.col - 1].isAlive) {
      counter++;
    }
    if (this.row - 1 > -1 && this.col + 1 < 10 && grid[this.row - 1][this.col + 1].isAlive) {
      counter++;
    }

    return counter;
  }
}

export { Cell };
