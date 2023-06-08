import "./style.css";
import { Game } from "./Game";
import { Canvas } from "./view/Canvas";

const canvas = document.getElementById("fields") as HTMLCanvasElement | null;

if (canvas) {
  const game = new Game(500, 500, new Canvas(500, 500, canvas));

  game.start();
}
