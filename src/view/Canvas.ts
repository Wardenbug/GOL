import { Grid } from "../Grid";
import { View } from "./View";

class Canvas extends View {
  public width: number;
  public height: number;
  public grid: Grid;
  private canvas: HTMLCanvasElement;
  private isDown: boolean = false;

  static CELL_SIZE = 20;

  constructor(
    width: number,
    height: number,
    canvasElement: HTMLCanvasElement,
    grid: Grid
  ) {
    super();
    this.width = width;
    this.height = height;
    this.canvas = canvasElement;
    this.canvas.width = width * Canvas.CELL_SIZE;
    this.canvas.height = height * Canvas.CELL_SIZE;
    this.grid = grid;

    this.canvas.addEventListener("mousemove", this.handleMouseMove);
    this.canvas.addEventListener("click", this.handleClick);
    this.canvas.addEventListener("mousedown", this.handleMouseDown);
    this.canvas.addEventListener("mouseup", this.handleMouseUp);
  }

  private handleMouseDown = () => {
    this.isDown = true;
  }
  private handleMouseUp = () => {
    this.isDown = false;
  }
  private handleMouseMove = (event: MouseEvent) => {
    if (this.isDown) {
      const [x, y] = this.getCursorPosition(event);
      this.grid.grid[y][x].isAlive = true;
      this.render(this.grid);
    }
  };

  setWidth() {}
  setHeight() {}
  setCellSize() {}

  private handleClick = (event: MouseEvent) => {
    const [x, y] = this.getCursorPosition(event);
    this.grid.grid[y][x].isAlive = true;
    this.render(this.grid);
  };

  public getCursorPosition(event: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return [
      Math.floor(Math.floor(x) / Canvas.CELL_SIZE),
      Math.floor(Math.floor(y) / Canvas.CELL_SIZE),
    ];

    // const xC = Math.floor(Math.floor(x) / Canvas.CELL_SIZE);
    // const yC = Math.floor(Math.floor(y) / Canvas.CELL_SIZE);

    // const ctx = this.canvas.getContext("2d");
    // if (ctx) {
    //   for (let i = 0; i < this.height; i++) {
    //     for (let j = 0; j < this.width; j++) {
    //       if (j === xC && yC === i) {
    //         ctx.fillStyle = "red";
    //         ctx.fillRect(
    //           Canvas.CELL_SIZE * j + 2,
    //           Canvas.CELL_SIZE * i + 2,
    //           Canvas.CELL_SIZE - 4,
    //           Canvas.CELL_SIZE - 4
    //         );
    //       }
    //     }
    //   }
    // }

    // console.log(
    //   "x: " +
    //     Math.floor(Math.floor(x) / 20) +
    //     " y: " +
    //     Math.floor(Math.floor(y) / 20)
    // );
  }

  render = (grid: Grid) => {
    const ctx = this.canvas.getContext("2d");
    if (ctx) {
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          ctx.fillStyle = "black";
          ctx.fillRect(
            Canvas.CELL_SIZE * j,
            Canvas.CELL_SIZE * i,
            Canvas.CELL_SIZE,
            Canvas.CELL_SIZE
          );
          ctx.fillStyle = grid.grid[i][j].isAlive ? "red" : "white";
          ctx.fillRect(
            Canvas.CELL_SIZE * j + 2,
            Canvas.CELL_SIZE * i + 2,
            Canvas.CELL_SIZE - 4,
            Canvas.CELL_SIZE - 4
          );
        }
      }
    }
  };
}

export { Canvas };
