import { AbstractAppClass } from '../common'
import { IControllerBody } from '../common/IControllerBody'
import { NamespaceEntityEnemy } from '../entities'
import { typeEnemyCustomData } from './interfaces/IEnemyController'

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
      const tempEnemyCustomData: typeEnemyCustomData[] = [
        {
          urlImage: new URL(`../../assets/images/enemies/enemy1.png`, import.meta.url),
          spriteHeight: 155,
          spriteWidth: 293,
          frame: 5,
        },
        {
          urlImage: new URL(`../../assets/images/enemies/enemy2.png`, import.meta.url),
          spriteHeight: 183,
          spriteWidth: 266,
          frame: 5,
        },
      ]
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
            spriteWidth: tempEnemyCustomData[evenOdd].spriteWidth,
            spriteHeight: tempEnemyCustomData[evenOdd].spriteHeight,
            frame: tempEnemyCustomData[evenOdd].frame,
          }
        )
        this.enemyBats[indexEnemy].height = this.enemyBats[indexEnemy].spriteHeight / 2
        this.enemyBats[indexEnemy].width = this.enemyBats[indexEnemy].spriteWidth / 2
        this.enemyBats[indexEnemy].image = new Image()
        this.enemyBats[indexEnemy].image.src = tempEnemyCustomData[evenOdd].urlImage.href
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
