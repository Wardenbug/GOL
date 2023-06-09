class Cell {
  public isAlive: boolean = false;
  private col: number;
  private row: number;

  constructor(col: number, row: number, isAlive: boolean) {
    this.col = col;
    this.row = row;
    this.isAlive = isAlive;
  }
}

export { Cell };
