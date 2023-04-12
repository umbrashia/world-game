import { IControllerBody } from '../common/IControllerBody'
import { NamespaceEntityData } from './EntityData'

export namespace NamespaceEntityEnemy {
  export class EntityEnemy
    extends NamespaceEntityData.SimpleData
    implements NamespaceEntityData.IEntityBody, IControllerBody.IControllerBody
  {
    private localFrame: number = 0
    private localFrameSpeed: number = 0
    constructor() {
      super()
    }
    initMain(): void {
      return
    }
    update(): void {
      this.x += this.speed
      this.y += this.speed
      if (this.localFrameSpeed % 2 == 0)
        this.frame > this.localFrame ? this.localFrame++ : (this.localFrame = 0)
      if (this.localFrame >= 100) this.localFrameSpeed = 0
      this.localFrameSpeed++
    }
    draw(): void {
      // this.ctxContext?.strokeRect(this.x, this.y, this.width, this.height)
      this.ctxContext.drawImage(
        this.image,
        this.spriteWidth * this.localFrame,
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
