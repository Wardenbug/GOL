import { Cell } from "../Cell";
import { Grid } from "../Grid";
import { View } from "./View";

class Canvas extends View {
  public width: number;
  public height: number;
  private canvas: HTMLCanvasElement;

  constructor(width: number, height: number, canvasElement: HTMLCanvasElement) {
    super();
    this.width = width;
    this.height = height;
    this.canvas = canvasElement;

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
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (j === xC && yC === i) {
            ctx.fillStyle = "red";
            ctx.fillRect(20 * j + 2, 20 * i + 2, 16, 16);
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
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          ctx.fillStyle = "black";
          ctx.fillRect(20 * j, 20 * i, 20, 20);
          ctx.fillStyle = grid.grid[i][j].isAlive ? "red" : "white";
          ctx.fillRect(20 * j + 2, 20 * i + 2, 16, 16);
        }
      }
    }
  };
}

export { Canvas };
