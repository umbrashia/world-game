import { IControllerBody } from "../common/IControllerBody";
import { NamespaceEntityData } from "./EntityData";

export namespace NamespaceEntityParallaxLayer {
  export interface IEntityParallaxLayer
    extends IControllerBody.IControllerBody {
    update(): void;
    draw(): void;
  }
  export class EntityParallaxLayer
    extends NamespaceEntityData.SimpleData
    implements IEntityParallaxLayer
  {
    constructor() {
      super();
    }
    initMain(): void {
      this.speed = this.gameSpeed * this.speedModifier;
    }

    updateSpeed(newValueGameSpeed: number) {
      this.gameSpeed = newValueGameSpeed;
      this.speed = this.gameSpeed * this.speedModifier;
    }

    update(): void {
      const speed = this.speed * this.speedModifier;
      if (this.x <= -this.width) {
        this.x = this.width + this.x - speed;
      }
      this.x = Math.floor(this.x - speed);
    }
    draw(): void {
      if (!this.image) throw new Error("ctx is not found..");
      this.ctxContext?.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.ctxContext?.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }
}
