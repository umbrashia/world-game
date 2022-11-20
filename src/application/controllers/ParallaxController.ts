import { AbstractAppClass } from "../common";
import { IControllerBody } from "../common/IControllerBody";
import {
  NamespaceEntityParallaxControls,
  NamespaceEntityParallaxLayer,
} from "../entities";

export default class ParallaxController
  extends AbstractAppClass
  implements
    IControllerBody.IControllerBody,
    IControllerBody.IFunctionAnimate,
    IControllerBody.IHtmlInputElementEvent<HTMLInputElement>
{
  gameSpeed: number = 10;
  x: number = 0;
  x2: number = 2400;
  private controls: NamespaceEntityParallaxControls.EntityParallaxControl;
  private layers: Array<NamespaceEntityParallaxLayer.EntityParallaxLayer> = [];
  private speedModifer: number[] = [0.2, 0.4, 0.6, 0.8, 1];
  constructor() {
    super();
    super.CANVAS_HEIGHT = 700;
    super.CANVAS_WIDTH = 800;
    this.controls = new NamespaceEntityParallaxControls.EntityParallaxControl();
  }
  eventChange(evt: Event & { target: HTMLInputElement }) {
    this.gameSpeed = parseInt(evt.target.value);
    this.controls.innerHtmlSpanGameSpeed = evt.target.value;
    this.layers.forEach((el) => el.updateSpeed(this.gameSpeed));
  }

  doAnimate(): void {
    this.ctxContext?.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    this.layers.forEach((el) => {
      el.update();
      el.draw();
    });
    requestAnimationFrame(() => this.doAnimate());
  }

  initMain(): void {
    try {
      super.initMain();
      if (!this.controls) throw new Error("controls is not found");
      this.controls.canvas = this.canvas;
      this.controls.mainDiv = this.mainDiv;
      this.controls.eventChange = (e: any) => this.eventChange(e);
      this.controls.initMain();
      this.controls.innerHtmlSpanGameSpeed = <any>this.gameSpeed;
      this.controls.valueInputRangeSpeedControl = <any>this.gameSpeed;

      for (let index = 1; index <= 5; index++) {
        const tempLayer: NamespaceEntityParallaxLayer.EntityParallaxLayer =
          new NamespaceEntityParallaxLayer.EntityParallaxLayer();
        tempLayer.ctxContext = this.ctxContext;
        tempLayer.image = new Image();
        tempLayer.image.src = new URL(
          `../../assets/images/backgroundLayers/layer-${index}.png`,
          import.meta.url
        ).href;
        tempLayer.width = 2400;
        tempLayer.height = 700;
        tempLayer.gameSpeed = this.gameSpeed;
        tempLayer.speedModifier = this.speedModifer[index - 1];
        tempLayer.initMain();
        this.layers.push(tempLayer);
      }
      document.body.style.background = `black`;
      this.doAnimate();
    } catch (error) {
      console.error(`error : `, error);
    }
  }
}
