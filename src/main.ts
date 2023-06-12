import "./style.css";
import { Game } from "./Game";
import { Canvas } from "./view/Canvas";
import { Grid } from "./Grid";

const canvas = document.getElementById("fields") as HTMLCanvasElement | null;

if (canvas) {
  const grid = new Grid(50, 50);
  const view = new Canvas(50, 50, canvas, grid);
  const game = new Game(grid, view);

  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const speedInput = document.getElementById(
    "speed"
  ) as HTMLInputElement | null;

  playButton?.addEventListener("click", game.play);
  pauseButton?.addEventListener("click", game.pause);
  if (speedInput) {
    speedInput.value = String(game.speed);
    speedInput.addEventListener('change', function(event: any){
      game.speed = event.target.value
    })
  }

  game.start();
}
