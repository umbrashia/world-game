import { IControllerBody } from "../common/IControllerBody";
import { IParallaxController } from "./IParallaxController";

export default class ParallaxController
  extends IParallaxController
  implements IControllerBody.IControllerBody
{
  constructor() {
    super();
  }
  initMain(): void {
    throw new Error("Method not implemented.");
  }
}
