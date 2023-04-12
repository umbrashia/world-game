import { AbstractAppClass } from '../../common'
import { IControllerBody } from '../../common/IControllerBody'

export type typeEnemyCustomData = {
  urlImage: URL
  spriteWidth: number
  spriteHeight: number
  frame: number
  frameSpeed?: number
}

export class IEnemyController
  extends AbstractAppClass
  implements IControllerBody.IControllerBody
{
  protected tempEnemyCustomData: typeEnemyCustomData[] = []

  constructor() {
    super()
    this.tempEnemyCustomData = [
      {
        urlImage: new URL(`../../../assets/images/enemies/enemy1.png`, import.meta.url),
        spriteHeight: 155,
        spriteWidth: 293,
        frame: 4,
        frameSpeed: 2,
      },
      {
        urlImage: new URL(`../../../assets/images/enemies/enemy2.png`, import.meta.url),
        spriteHeight: 183,
        spriteWidth: 266,
        frame: 5,
        frameSpeed: 2,
      },
    ]
  }

  initMain(): void {
    super.initMain()
  }
}
