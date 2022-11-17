export namespace IControllerBody {
  export interface IControllerBody {
    initMain(): void;
  }

  export interface IFunctionAnimate {
    doAnimate(): void;
  }

  export type TGenericEventTarget<T> = Event & { target: T };

  export interface IGameEvent {}
}
