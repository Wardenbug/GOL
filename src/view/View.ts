import { Grid } from "../Grid";

abstract class View {
  abstract width: number;
  abstract height: number;

  abstract render(grid: Grid): void;
}

export { View };
