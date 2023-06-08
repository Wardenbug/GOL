import "./style.css";
import { Game } from "./Game";
import { Canvas } from "./view/Canvas";

const canvas = document.getElementById("fields") as HTMLCanvasElement | null;

if (canvas) {
  const game = new Game(50, 50, new Canvas(50, 50, canvas));

  game.start();
}
