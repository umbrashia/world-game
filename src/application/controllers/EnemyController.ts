import { AbstractAppClass } from '../common'
import { IControllerBody } from '../common/IControllerBody'
import { NamespaceEntityEnemy } from '../entities'

export default class EnemyController
  extends AbstractAppClass
  implements IControllerBody.IControllerBody, IControllerBody.IFunctionAnimate
{
  private enemyBats: Array<NamespaceEntityEnemy.EntityEnemy> = []
  constructor() {
    super()
    super.CANVAS_HEIGHT = 1000
    super.CANVAS_WIDTH = 500
  }

  initMain(): void {
    try {
      super.initMain()
      let indexEnemy: number = 0
      const urls: URL[] = [
        new URL(`../../assets/images/enemies/enemy1.png`, import.meta.url),
        new URL(`../../assets/images/enemies/enemy2.png`, import.meta.url),
      ]
      while (indexEnemy <= 100) {
        this.enemyBats.push(new NamespaceEntityEnemy.EntityEnemy())
        this.setAllClassValues<NamespaceEntityEnemy.EntityEnemy>(
          this.enemyBats[indexEnemy],
          {
            ctxContext: this.ctxContext,
            x: this.CANVAS_WIDTH * Math.random(),
            y: this.CANVAS_HEIGHT * Math.random(),
            height: 100,
            width: 100,
            speed: Math.random() * 4 - 2,
          }
        )
        this.enemyBats[indexEnemy].image = new Image()
        this.enemyBats[indexEnemy].image.src = urls[indexEnemy % 2 == 0 ? 0 : 1].href
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
