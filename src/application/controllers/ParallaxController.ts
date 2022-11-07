import { AbstractAppClass } from "../common";
import { IControllerBody } from "../common/IControllerBody";
import { NamespaceEntityParallaxLayer } from "../entities";

export default class ParallaxController
  extends AbstractAppClass
  implements IControllerBody.IControllerBody, IControllerBody.IFunctionAnimate
{
  private backgroundLayers: Array<HTMLImageElement> = [];
  gameSpeed: number = 10;
  x: number = 0;
  x2: number = 2400;
  constructor() {
    super();
    super.CANVAS_HEIGHT = 700;
    super.CANVAS_WIDTH = 800;
  }
  doAnimate(): void {
    this.ctxContext?.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    this.ctxContext?.drawImage(this.backgroundLayers[3], this.x, 0);
    this.ctxContext?.drawImage(this.backgroundLayers[3], this.x2, 0);
    if (this.x < -2400) {
      this.x = 2400 + this.x2 - this.gameSpeed;
    } else this.x -= this.gameSpeed;
    if (this.x2 < -2400) {
      this.x2 = 2400 + this.x - this.gameSpeed; //+ this.x - this.gameSpeed;
    } else this.x2 -= this.gameSpeed;

    requestAnimationFrame(() => this.doAnimate());
  }
  initMain(): void {
    try {
      for (let index = 1; index <= 5; index++) {
        const tempImageBackground = new Image();
        tempImageBackground.src = new URL(
          `../../assets/images/backgroundLayers/layer-${index}.png`,
          import.meta.url
        ).href;
        this.backgroundLayers.push(tempImageBackground);
      }
      super.initMain();
      document.body.style.background = `black`;
      new NamespaceEntityParallaxLayer.EntityParallaxLayer();
      this.doAnimate();
    } catch (error) {
      console.error(`error : `, error);
    }
  }
}
