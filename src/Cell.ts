import { Grid } from "./Grid";

class Cell {
  public isAlive: boolean = false;
  private col: number;
  private row: number;

  constructor(col: number, row: number, isAlive: boolean) {
    this.col = col;
    this.row = row;
    this.isAlive = isAlive;
  }

  public countNeighbours(grid: Grid) {
    let counter = 0;

    if (this.col - 1 > -1 && grid.grid[this.row][this.col - 1].isAlive) {
      counter++;
    }
    if (
      this.col + 1 < grid.width &&
      grid.grid[this.row][this.col + 1].isAlive
    ) {
      counter++;
    }
    if (
      this.row + 1 < grid.height &&
      grid.grid[this.row + 1][this.col].isAlive
    ) {
      counter++;
    }
    if (this.row - 1 > -1 && grid.grid[this.row - 1][this.col].isAlive) {
      counter++;
    }
    if (
      this.col - 1 > -1 &&
      this.row + 1 < grid.height &&
      grid.grid[this.row + 1][this.col - 1].isAlive
    ) {
      counter++;
    }
    if (
      this.col + 1 < grid.width &&
      this.row + 1 < grid.height &&
      grid.grid[this.row + 1][this.col + 1].isAlive
    ) {
      counter++;
    }
    if (
      this.row - 1 > -1 &&
      this.col - 1 > -1 &&
      grid.grid[this.row - 1][this.col - 1].isAlive
    ) {
      counter++;
    }
    if (
      this.row - 1 > -1 &&
      this.col + 1 < grid.width &&
      grid.grid[this.row - 1][this.col + 1].isAlive
    ) {
      counter++;
    }

    return counter;
  }
}

export { Cell };
