import IMainController from "./IMainController";
import fileImageShadowDog from "../../assets/images/shadow_dog.png";

export default class MainController implements IMainController {
  initMain() {
    throw new Error("Method not implemented.");
  }
  static imageShadow: HTMLImageElement | CanvasImageSource | null = null;

  static xMe: number = 0;

  public static ctxContext: CanvasRenderingContext2D | null = null;
  public static CANVAS_HEIGHT: number = 0;
  public static CANVAS_WIDTH: number = 0;
  private canvas: HTMLCanvasElement | null = null;

  private mainDiv: HTMLDivElement;

  static spriteWidth = 575;

  static spriteHight = 523;

  static frameX = 0;

  static frameY = 0;

  static gameFrame = 0;
  static staggerFrames = 5;

  constructor() {
    this.mainDiv = document.querySelector<any>(`.canvasDiv`);
    if (!this.mainDiv) throw new Error("no html div");
    this.canvas = null || this.canvas;
  }
  static animate() {
    MainController.ctxContext?.clearRect(
      0,
      0,
      MainController.CANVAS_WIDTH,
      MainController.CANVAS_HEIGHT
    );

    MainController.ctxContext?.drawImage(
      MainController.imageShadow as any,
      MainController.frameX * MainController.spriteWidth,
      MainController.frameY * MainController.spriteHight,
      MainController.spriteWidth,
      MainController.spriteHight,
      0,
      0,
      MainController.CANVAS_WIDTH,
      MainController.CANVAS_HEIGHT
    );

    if (MainController.gameFrame % MainController.staggerFrames == 0) {
      if (MainController.frameX <= 5) MainController.frameX++;
      else MainController.frameX = 0;
      MainController.gameFrame = 0;
    }
    MainController.gameFrame++;

    // MainController.ctxContext?.fillRect (MainController.xMe, 50, 100, 100);

    requestAnimationFrame(MainController.animate);
  }
}
