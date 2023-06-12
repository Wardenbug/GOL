import { Cell } from "./Cell";

class Grid {
  public grid: Cell[][] = [];
  public width: number;
  public height: number;

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

  public getCell(x: number, y: number) {
    return this.grid[y][x];
  }

  public updateCell(x: number, y: number) {}

  public countNeighbours(x: number, y: number) {
    const neighbours = [
      [x - 1, y],
      [x + 1, y],
      [x, y + 1],
      [x, y - 1],
      [x - 1, y + 1],
      [x - 1, y - 1],
      [x + 1, y + 1],
      [x + 1, y - 1],
    ];

    let counter = neighbours.reduce((prev, [x, y]) => {
      let col = x;
      let row = y;
      if (x < 0) col = this.width - 1;
      if (x > this.width - 1) col = 0;
      if (y < 0) row = this.height - 1;
      if (y > this.height - 1) row = 0;

      if (this.grid[row][col].isAlive) return prev + 1;
      return prev;
    }, 0);

    return counter;
  }

  public tick = () => {
    const newGrid: Cell[][] = [];

    for (let y = 0; y < this.height; y++) {
      if (!newGrid[y]) newGrid[y] = [];
      for (let x = 0; x < this.width; x++) {
        const currentCell = this.grid[y][x];
        const counter = this.countNeighbours(x, y);
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
