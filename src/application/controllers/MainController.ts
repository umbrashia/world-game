import IMainController, { EnumDogState, TImageState } from "./IMainController";
import fileImageShadowDog from "../../assets/images/shadow_dog.png";

export default class MainController extends IMainController {
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
  static staggerFrames = 4;
  static dogDisplayState: TImageState;

  static playerState: EnumDogState = EnumDogState.idle;

  static animate() {
    const tempThing =
      MainController.dogDisplayState[MainController.playerState];
    MainController.ctxContext?.clearRect(
      0,
      0,
      MainController.CANVAS_WIDTH,
      MainController.CANVAS_HEIGHT
    );

    MainController.ctxContext?.drawImage(
      MainController.imageShadow as any,
      tempThing?.loc[MainController.frameX].x as any,
      tempThing?.loc[MainController.frameX].y as number,
      MainController.spriteWidth,
      MainController.spriteHight,
      0,
      0,
      MainController.CANVAS_WIDTH,
      MainController.CANVAS_HEIGHT
    );
    if (MainController.gameFrame % 4 === 0) {
      if (MainController.frameX < (tempThing?.frame as number) - 1) {
        MainController.frameX++;
      } else MainController.frameX = 0;
      MainController.gameFrame = 0;
    }
    MainController.gameFrame++;
    requestAnimationFrame(MainController.animate);
  }

  constructor() {
    super();
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

    MainController.dogDisplayState = this.getCompiledDogState({
      spriteHeight: MainController.spriteHight,
      spriteWidth: MainController.spriteWidth,
    });
    console.log(MainController.dogDisplayState);
    this.addSelectAnimation();
    MainController.animate();
  }

  static onChangeOption(e: Event): any {
    MainController.playerState = (<HTMLSelectElement>e.target).value as any;
    MainController.frameX = 0;
  }

  addSelectAnimation() {
    const temp: HTMLSelectElement | null =
      document.querySelector<HTMLSelectElement>(`#selectAnimationOption`);
    if (!temp) return 0;
    temp.style.color = "red";
    for (const key in EnumDogState as any) {
      if (Object.prototype.hasOwnProperty.call(EnumDogState as any, key)) {
        const opt = document.createElement(`option`) as HTMLOptionElement;
        opt.text = key;
        opt.value = (EnumDogState as any)[key];
        temp?.add(opt);

        //(EnumDogState as any)[key];
      }
    }

    temp?.addEventListener("change", MainController.onChangeOption);
  }
}
