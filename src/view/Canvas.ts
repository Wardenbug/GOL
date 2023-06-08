import { Cell } from "../Cell";
import { Grid } from "../Grid";
import { View } from "./View";

class Canvas extends View {
  public width: number;
  public height: number;
  private canvas: HTMLCanvasElement;

  static CELL_SIZE = 20;

  constructor(width: number, height: number, canvasElement: HTMLCanvasElement) {
    super();
    this.width = width;
    this.height = height;
    this.canvas = canvasElement;
    this.canvas.width = width * Canvas.CELL_SIZE
    this.canvas.height = height * Canvas.CELL_SIZE

    // this.canvas.addEventListener("mousemove", this.getCursorPosition);
  }

  public getCursorPosition(event: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xC = Math.floor(Math.floor(x) / 20);
    const yC = Math.floor(Math.floor(y) / 20);

    const ctx = this.canvas.getContext("2d");
    if (ctx) {
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          if (j === xC && yC === i) {
            ctx.fillStyle = "red";
            ctx.fillRect(
              Canvas.CELL_SIZE * j + 2,
              Canvas.CELL_SIZE * i + 2,
              Canvas.CELL_SIZE - 4,
              Canvas.CELL_SIZE - 4
            );
          }
        }
      }
    }

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
