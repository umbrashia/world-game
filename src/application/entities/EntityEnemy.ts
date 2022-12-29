import { IControllerBody } from "../common/IControllerBody";
import { NamespaceEntityData } from "./EntityData";

export namespace NamespaceEntityEnemy {
  export class EntityEnemy
    extends NamespaceEntityData.SimpleData
    implements NamespaceEntityData.IEntityBody, IControllerBody.IControllerBody
  {
    constructor() {
      super();
    }
    initMain(): void {
      throw new Error("Method not implemented.");
    }
    update(): void {
      throw new Error("Method not implemented.");
    }
    draw(): void {
      throw new Error("Method not implemented.");
    }
  }
}
