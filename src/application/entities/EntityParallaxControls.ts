import { IControllerBody } from "../common/IControllerBody";
import { NamespaceEntityData } from "./EntityData";

export namespace NamespaceEntityParallaxControls {
  export interface IEntityParallaxControl
    extends IControllerBody.IControllerBody {}
  export class EntityParallaxControl
    extends NamespaceEntityData.SimpleHtmlData
    implements
      IEntityParallaxControl,
      IControllerBody.IHtmlInputElementEvent<HTMLInputElement>
  {
    public eventChange: (
      evt?: IControllerBody.TGenericEventTarget<HTMLInputElement> & Event
    ) => void = null as any;
    private inputRangeSpeedControl: HTMLInputElement | null = null;
    private spanGameSpeed: HTMLSpanElement | null = null;
    constructor() {
      super();
      this.inputRangeSpeedControl = document.createElement(`input`);
      this.spanGameSpeed = document.createElement(`span`);
    }
    initMain(): void {
      if (!this.inputRangeSpeedControl)
        throw new Error("element inputRangeSpeedControl not created properly.");
      if (!this.spanGameSpeed)
        throw new Error("element spanGameSpeed not created properly.");
      const tempP = document.createElement(`p`);
      tempP.textContent = "Game Speed : ";
      tempP.style.color = `white`;
      tempP.appendChild(this.spanGameSpeed);
      this.inputRangeSpeedControl.type = "range";
      this.inputRangeSpeedControl.min = "1";
      this.inputRangeSpeedControl.max = "100";
      this.inputRangeSpeedControl.value = "5";
      this.inputRangeSpeedControl.style.width = `100%`;
      if (!this.eventChange)
        throw new Error(
          "inputRangeSpeedControl eventChange must set before mainInit call."
        );
      this.inputRangeSpeedControl.addEventListener(
        `change`,
        <any>this.eventChange
      );
      this.mainDiv.appendChild(tempP);
      this.mainDiv.appendChild(this.inputRangeSpeedControl);
    }

    public get valueInputRangeSpeedControl(): string {
      if (!this.inputRangeSpeedControl)
        throw new Error("inputRangeSpeedControl is not define");
      return this.inputRangeSpeedControl.value;
    }
    public set valueInputRangeSpeedControl(value: string) {
      if (!this.inputRangeSpeedControl)
        throw new Error("inputRangeSpeedControl is not define");
      this.inputRangeSpeedControl.value = value;
    }
    public get innerHtmlSpanGameSpeed(): string {
      if (!this.spanGameSpeed) throw new Error("spanGameSpeed is not define");
      return this.spanGameSpeed.innerHTML;
    }
    public set innerHtmlSpanGameSpeed(value: string) {
      if (!this.spanGameSpeed) throw new Error("spanGameSpeed is not define");
      this.spanGameSpeed.innerHTML = value;
    }
  }
}
