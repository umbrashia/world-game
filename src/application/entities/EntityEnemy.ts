import { IControllerBody } from '../common/IControllerBody'
import { NamespaceEntityData } from './EntityData'

export namespace NamespaceEntityEnemy {
  export class EntityEnemy
    extends NamespaceEntityData.SimpleData
    implements NamespaceEntityData.IEntityBody, IControllerBody.IControllerBody
  {
    #localFrame: number
    constructor() {
      super()
    }
    initMain(): void {
      this.#localFrame = 0
      return null
    }
    update(): void {
      this.x += this.speed
      this.y += this.speed
      this.frame > this.#localFrame ? this.#localFrame++ : (this.#localFrame = 0)
    }
    draw(): void {
      // this.ctxContext?.strokeRect(this.x, this.y, this.width, this.height)
      this.ctxContext.drawImage(
        this.image,
        this.spriteWidth * this.#localFrame,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
  }
}
