import { Grid } from "../Grid";
import { View } from "./View";

class Console extends View {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  render(grid: Grid): void {}
}

export { Console };
