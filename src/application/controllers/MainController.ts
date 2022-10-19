import IMainController from "./IMainController";
import fileImageShadowDog from "../../assets/images/shadow_dog.png";

export default class MainController implements IMainController {
  static imageShadow: HTMLImageElement | CanvasImageSource | null = null;

  static xMe: number = 0;

  public static ctxContext: CanvasRenderingContext2D | null = null;
  public static CANVAS_HEIGHT: number = 0;
  public static CANVAS_WIDTH: number = 0;
  private canvas: HTMLCanvasElement;

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
    this.canvas = this.mainDiv
      .getElementsByClassName(`mainCanvas`)
      .item(0) as HTMLCanvasElement;
  }

  initMain() {
    MainController.CANVAS_WIDTH = this.canvas.width = 600;
    MainController.CANVAS_HEIGHT = this.canvas.height = 600;
    MainController.ctxContext = this.canvas.getContext("2d");
    if (!MainController.ctxContext) throw new Error("2d context not found");
    MainController.imageShadow = new Image();
    MainController.imageShadow.src = fileImageShadowDog;
    MainController.animate();
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
    requestAnimationFrame(MainController.animate);
  }
}
