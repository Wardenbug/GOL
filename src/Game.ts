import { Grid } from "./Grid";
import { View } from "./view/View";

class Game {
  private grid: Grid;
  private view: View;

  constructor(grid: Grid, view: View) {
    this.grid = grid;
    this.view = view;
  }

  public start = () => {
    const that = this;

    (function loop() {
      setTimeout(() => {
        that.grid.tick();
        that.view.render(that.grid);
        loop();
      }, 1000 / 30);
    })();
  };
}

export { Game };
