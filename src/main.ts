import "./style.css";
import { Game } from "./Game";
import { Canvas } from "./view/Canvas";
import { Grid } from "./Grid";

const canvas = document.getElementById("fields") as HTMLCanvasElement | null;

if (canvas) {
  const grid = new Grid(50, 50);
  const view = new Canvas(50, 50, canvas);
  const game = new Game(grid, view);

  game.start();
}
