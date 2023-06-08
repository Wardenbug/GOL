import { Grid } from "./Grid";
import { View } from "./view/View";

class Game {
  private grid: Grid;
  private view: View;

  constructor(width: number, height: number, view: View) {
    this.grid = new Grid(width, height);
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

    this.grid;
  };
}

export { Game };
