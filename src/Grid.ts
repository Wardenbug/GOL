import { Cell } from "./Cell";

class Grid {
  public grid: Cell[][] = [];
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.gridInit(width, height);
  }

  private gridInit(
    width: number,
    height: number,
    randomFc = () => Math.random() > 0.5
  ) {
    this.grid = [];
    for (let y = 0; y < height; y++) {
      if (!this.grid[y]) this.grid[y] = [];
      for (let x = 0; x < width; x++) {
        this.grid[y][x] = new Cell(x, y, randomFc());
      }
    }
  }

  public tick = () => {
    const newGrid: Cell[][] = [];
    
    for (let y = 0; y < this.height; y++) {
      if (!newGrid[y]) newGrid[y] = [];
      for (let x = 0; x < this.width; x++) {
        const currentCell = this.grid[y][x];
        const counter = currentCell.countNeighbours(this.grid);
        let isAlive = false;
        if (currentCell.isAlive) {
          if (counter === 2 || counter === 3) {
            isAlive = true;
          } else {
            isAlive = false;
          }
        } else {
          if (counter === 3) isAlive = true;
        }
        newGrid[y][x] = new Cell(x, y, isAlive);
      }
    }

    this.grid = newGrid;
  };
}

export { Grid };
