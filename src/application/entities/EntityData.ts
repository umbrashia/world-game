export namespace NamespaceEntityData {
  export class SimpleHtmlData {
    private _mainDiv: HTMLDivElement = null as any;
    public get mainDiv(): HTMLDivElement {
      return this._mainDiv;
    }
    public set mainDiv(value: HTMLDivElement) {
      this._mainDiv = value;
    }
    private _canvas: HTMLCanvasElement = null as any;
    public get canvas(): HTMLCanvasElement {
      if (!this._canvas) throw new Error("canvas is empty");
      return this._canvas;
    }
    public set canvas(value: HTMLCanvasElement) {
      this._canvas = value;
    }
  }

  export class SimpleData {
    private _ctxContext: CanvasRenderingContext2D | null = null;
    public get ctxContext(): CanvasRenderingContext2D | null {
      return this._ctxContext;
    }
    public set ctxContext(value: CanvasRenderingContext2D | null) {
      this._ctxContext = value;
    }
    private _image: HTMLImageElement | null = null;
    public get image(): HTMLImageElement | null {
      return this._image;
    }
    public set image(value: HTMLImageElement | null) {
      this._image = value;
    }
    private _gameSpeed: number = 0;
    public get gameSpeed(): number {
      return this._gameSpeed;
    }
    public set gameSpeed(value: number) {
      this._gameSpeed = value;
    }
    private _speedModifier: number = 0;
    public get speedModifier(): number {
      return this._speedModifier;
    }
    public set speedModifier(value: number) {
      this._speedModifier = value;
    }
    private _speed: number = 0;
    public get speed(): number {
      return this._speed;
    }
    public set speed(value: number) {
      this._speed = value;
    }
    private _x: number = 0;
    public get x(): number {
      return this._x;
    }
    public set x(value: number) {
      this._x = value;
    }
    private _y: number = 0;
    public get y(): number {
      return this._y;
    }
    public set y(value: number) {
      this._y = value;
    }
    private _width: number = 0;
    public get width(): number {
      return this._width;
    }
    public set width(value: number) {
      this._width = value;
    }
    private _height: number = 0;
    public get height(): number {
      return this._height;
    }
    public set height(value: number) {
      this._height = value;
    }
  }
}
