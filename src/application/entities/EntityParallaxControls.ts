import { IControllerBody } from "../common/IControllerBody";
import { NamespaceEntityData } from "./EntityData";

export namespace NamespaceEntityParallaxControls {
  export interface IEntityParallaxControl
    extends IControllerBody.IControllerBody {}
  export class EntityParallaxControl
    extends NamespaceEntityData.SimpleHtmlData
    implements IEntityParallaxControl
  {
    private inputRangeSpeedControl: HTMLInputElement | null = null;
    private spanGameSpeed: HTMLSpanElement | null = null;
    constructor() {
      super();
      this.inputRangeSpeedControl = document.createElement(`input`);
      this.spanGameSpeed = document.createElement(`span`);
    }
    initMain(): void {
      try {
        if (!this.inputRangeSpeedControl)
          throw new Error(
            "element inputRangeSpeedControl not created properly."
          );
        if (!this.spanGameSpeed)
          throw new Error("element spanGameSpeed not created properly.");
        const tempP = document.createElement(`p`);
        tempP.textContent = "Game Speed : ";
        tempP.style.color = `white`;
        tempP.appendChild(this.spanGameSpeed);
        this.inputRangeSpeedControl.type = "range";
        this.inputRangeSpeedControl.min = "1";
        this.inputRangeSpeedControl.max = "20";
        this.inputRangeSpeedControl.value = "5";
        this.inputRangeSpeedControl.style.width = `100%`;
        this.mainDiv.appendChild(tempP);
        this.mainDiv.appendChild(this.inputRangeSpeedControl);
      } catch (err) {}
    }
  }
}
