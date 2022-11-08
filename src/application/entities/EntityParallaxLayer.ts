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
      this.x2 = this.width;
      this.speed = this.gameSpeed * this.speedModifier;
    }

    update(): void {
      const speed = this.speed * this.speedModifier;
      if (this.x <= -this.width) this.x = this.width + this.x2 - speed;
      if (this.x2 <= -this.width) this.x2 = this.width + this.x - speed;
      this.x = Math.floor(this.x - speed);
      this.x2 = Math.floor(this.x2 - speed);
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
        this.x2,
        this.y,
        this.width,
        this.height
      );
    }
    private _x2: number = 0;
    public get x2(): number {
      return this._x2;
    }
    public set x2(value: number) {
      this._x2 = value;
    }
  }
}
