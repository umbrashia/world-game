import IMainController, {
  EnumDogState,
  TImageState,
} from "./interfaces/IMainController";
import fileImageShadowDog from "../../assets/images/shadow_dog.png";

export default class MainController extends IMainController {
  imageShadow: HTMLImageElement | CanvasImageSource | null = null;

  xMe: number = 0;

  private ctxContext: CanvasRenderingContext2D | null = null;
  public CANVAS_HEIGHT: number = 0;
  public CANVAS_WIDTH: number = 0;
  private canvas: HTMLCanvasElement;

  private mainDiv: HTMLDivElement;
  spriteWidth = 575;
  spriteHight = 523;
  frameX = 0;
  frameY = 0;

  gameFrame = 0;
  staggerFrames = 4;
  dogDisplayState: TImageState = {};

  private playerState: EnumDogState = EnumDogState.idle;

  animate() {
    const tempThing = this.dogDisplayState[this.playerState];
    this.ctxContext?.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

    this.ctxContext?.drawImage(
      this.imageShadow as any,
      tempThing?.loc[this.frameX].x as any,
      tempThing?.loc[this.frameX].y as number,
      this.spriteWidth,
      this.spriteHight,
      0,
      0,
      this.CANVAS_WIDTH,
      this.CANVAS_HEIGHT
    );
    if (this.gameFrame % 4 === 0) {
      if (this.frameX < (tempThing?.frame as number) - 1) {
        this.frameX++;
      } else this.frameX = 0;
      this.gameFrame = 0;
    }
    this.gameFrame++;
    requestAnimationFrame(() => this.animate());
  }

  constructor() {
    super();
    this.mainDiv = document.querySelector<any>(`.canvasDiv`);
    this.playerState = EnumDogState.idle;
    if (!this.mainDiv) throw new Error("no html div");
    this.canvas = this.mainDiv
      .getElementsByClassName(`mainCanvas`)
      .item(0) as HTMLCanvasElement;
  }

  initMain() {
    this.CANVAS_WIDTH = this.canvas.width = 600;
    this.CANVAS_HEIGHT = this.canvas.height = 600;
    this.ctxContext = this.canvas.getContext("2d");
    if (!this.ctxContext) throw new Error("2d context not found");
    this.imageShadow = new Image();
    this.imageShadow.src = fileImageShadowDog;

    this.dogDisplayState = this.getCompiledDogState({
      spriteHeight: this.spriteHight,
      spriteWidth: this.spriteWidth,
    });
    console.log(this.dogDisplayState);
    this.addSelectAnimation();
    this.animate();
  }

  onChangeOption(e: Event): any {
    this.playerState = (<HTMLSelectElement>e.target).value as any;
    this.frameX = 0;
  }

  addSelectAnimation(): void {
    try {
      const tempSelectBox: HTMLSelectElement | null =
        document.createElement(`select`);
      tempSelectBox.setAttribute(`id`, `selectAnimationOption`);
      this.mainDiv.prepend(document.createElement(`hr`));
      this.mainDiv.prepend(tempSelectBox);
      this.mainDiv.prepend(`select the animaton : `);
      if (!tempSelectBox)
        throw new Error("Select animation Select input comboBox is not found.");
      for (const key in EnumDogState as any) {
        if (Object.prototype.hasOwnProperty.call(EnumDogState as any, key)) {
          const opt: HTMLOptionElement | null =
            document.createElement(`option`);
          opt.text = key;
          opt.value = (EnumDogState as any)[key];
          tempSelectBox.add(opt);
        }
      }
      tempSelectBox.addEventListener("change", (e) => this.onChangeOption(e));
    } catch (error) {
      console.error(`Error: `, error);
    }
  }
}
