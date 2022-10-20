export enum EnumDogState {
  idle = `IDLE`,
  jump = `JUMP`,
  run = `RUN`,
}
export enum EnumFrameDogState {
  idle = 6,
  jump = 6,
  run = 6,
}

export type TImageState = {
  [key in EnumDogState]?: {
    frame: number;
    loc?: Array<{ x: number; y: number }>;
  };
};

export default abstract class IMainController {
  getCompiledDogState(inputs: {
    spriteHeight: number;
    spriteWidth: number;
  }): TImageState {
    let dogState: any = {};
    let countItem = 0;
    for (const iterator in EnumDogState) {
      const temp: string = (EnumDogState as any)[iterator];
      dogState[temp] = { frame: (EnumFrameDogState as any)[iterator] };
      dogState[temp].loc = Array(dogState[temp].frame).fill({
        x: 0,
        y: 0,
      });
      dogState[temp].loc = (dogState[temp].loc as any[]).map((el, index) => {
        return {
          y: countItem * inputs.spriteHeight,
          x: index * inputs.spriteWidth,
        };
      });
      countItem++;
    }
    return dogState;
  }
}
