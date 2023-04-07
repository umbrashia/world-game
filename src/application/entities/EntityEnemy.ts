import { IControllerBody } from '../common/IControllerBody'
import { NamespaceEntityData } from './EntityData'

export namespace NamespaceEntityEnemy {
  export class EntityEnemy
    extends NamespaceEntityData.SimpleData
    implements NamespaceEntityData.IEntityBody, IControllerBody.IControllerBody
  {
    constructor() {
      super()
    }
    initMain(): void {}
    update(): void {
      this.x += this.speed
      this.y += this.speed
    }
    draw(): void {
      this.ctxContext?.fillRect(this.x, this.y, this.width, this.height)
    }
  }
}
