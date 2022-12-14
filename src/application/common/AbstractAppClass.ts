import { IControllerBody } from "./IControllerBody";

export default abstract class AbstractAppClass
  implements IControllerBody.IControllerBody
{
  protected mainDiv: HTMLDivElement;
  protected canvas: HTMLCanvasElement;
  protected CANVAS_WIDTH: number = 0;
  protected CANVAS_HEIGHT: number = 0;
  protected ctxContext: CanvasRenderingContext2D | null = null;

  constructor() {
    this.mainDiv = document.querySelector<any>(`.canvasDiv`);
    if (!this.mainDiv) throw new Error("no html div");
    this.canvas = this.mainDiv
      .getElementsByClassName(`mainCanvas`)
      .item(0) as HTMLCanvasElement;
    this.ctxContext = this.canvas.getContext("2d");
    this.ctxContext = this.canvas.getContext("2d");
  }
  initMain(): void {
    this.CANVAS_WIDTH = this.canvas.width = this.CANVAS_WIDTH || 600;
    this.CANVAS_HEIGHT = this.canvas.height = this.CANVAS_HEIGHT || 600;
  }
}
