import { IControllerBody } from '../common/IControllerBody'
import { NamespaceEntityEnemy } from '../entities'
import { IEnemyController } from './interfaces/IEnemyController'

export default class EnemyController
  extends IEnemyController
  implements IControllerBody.IControllerBody, IControllerBody.IFunctionAnimate
{
  private enemyBats: Array<NamespaceEntityEnemy.EntityEnemy> = []
  constructor() {
    super()
    super.CANVAS_HEIGHT = 1000
    super.CANVAS_WIDTH = 1000
  }

  initMain(): void {
    try {
      super.initMain()
      let indexEnemy: number = 0
      while (indexEnemy <= 100) {
        const evenOdd: number = indexEnemy % 2 == 0 ? 0 : 1
        this.enemyBats.push(new NamespaceEntityEnemy.EntityEnemy())
        this.setAllClassValues<NamespaceEntityEnemy.EntityEnemy>(
          this.enemyBats[indexEnemy],
          {
            ctxContext: this.ctxContext,
            x: this.CANVAS_WIDTH * Math.random(),
            y: this.CANVAS_HEIGHT * Math.random(),
            speed: Math.random() * 4 - 2,
            spriteWidth: this.tempEnemyCustomData[evenOdd].spriteWidth,
            spriteHeight: this.tempEnemyCustomData[evenOdd].spriteHeight,
            frame: this.tempEnemyCustomData[evenOdd].frame,
            speedModifier: this.tempEnemyCustomData[evenOdd].frameSpeed,
          }
        )
        this.enemyBats[indexEnemy].height =
          this.tempEnemyCustomData[evenOdd].spriteHeight / 2
        this.enemyBats[indexEnemy].width =
          this.tempEnemyCustomData[evenOdd].spriteWidth / 2
        this.enemyBats[indexEnemy].image = new Image()
        this.enemyBats[indexEnemy].image.src =
          this.tempEnemyCustomData[evenOdd].urlImage.href
        this.enemyBats[indexEnemy].initMain()
        indexEnemy++
      }
      this.doAnimate()
    } catch (error) {
      console.error(`error : `, error)
    }
  }
  doAnimate(): void {
    this.ctxContext?.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
    this.enemyBats.forEach((el) => {
      el.update()
      el.draw()
    })
    requestAnimationFrame(() => this.doAnimate())
  }
}
