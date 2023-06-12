import { Grid } from "./Grid";
import { View } from "./view/View";

class Game {
  private grid: Grid;
  private view: View;
  private isPlaying = false;
  public speed: number = 30;

  constructor(grid: Grid, view: View) {
    this.grid = grid;
    this.view = view;
  }

  public loop() {
    setTimeout(() => {
      if (this.isPlaying) {
        this.grid.tick();
        this.view.render(this.grid);
      }
      this.loop();
    }, 1000 / this.speed);
  }
  public start = () => {
    this.view.render(this.grid);
    this.loop();
  };

  public pause = () => {
    this.isPlaying = false;
  };
  public play = () => {
    this.isPlaying = true;
  };
}

export { Game };
