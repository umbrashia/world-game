import { AbstractAppClass } from '../common'
import { IControllerBody } from '../common/IControllerBody'

export default class EnemyController
  extends AbstractAppClass
  implements IControllerBody.IControllerBody, IControllerBody.IFunctionAnimate
{
  constructor() {
    super()
    super.CANVAS_HEIGHT = 1000
    super.CANVAS_WIDTH = 500
  }

  initMain(): void {
    try {
      super.initMain()

      //this.doAnimate();
    } catch (error) {
      console.error(`error : `, error)
    }
  }
  doAnimate(): void {
    this.ctxContext?.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)

    requestAnimationFrame(() => this.doAnimate())
  }
}
