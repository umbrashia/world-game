import { AppUtils } from './AppUtils'
import { IControllerBody } from './IControllerBody'

export default abstract class AbstractAppClass
  extends AppUtils
  implements IControllerBody.IControllerBody
{
  protected mainDiv: HTMLDivElement
  protected canvas: HTMLCanvasElement
  protected CANVAS_WIDTH: number = 0
  protected CANVAS_HEIGHT: number = 0
  protected ctxContext: CanvasRenderingContext2D = {} as any

  constructor() {
    super()
    this.mainDiv = document.querySelector<any>(`.canvasDiv`)
    if (!this.mainDiv) throw new Error('no html div')
    this.canvas = this.mainDiv
      .getElementsByClassName(`mainCanvas`)
      .item(0) as HTMLCanvasElement
    const tempCtx = this.canvas.getContext('2d')
    if (!tempCtx) throw new Error('ctx not found...')
    this.ctxContext = tempCtx
    this.ctxContext = tempCtx
  }
  initMain(): void {
    this.CANVAS_WIDTH = this.canvas.width = this.CANVAS_WIDTH || 600
    this.CANVAS_HEIGHT = this.canvas.height = this.CANVAS_HEIGHT || 600
  }
}
