export enum EnumDogState {
  idle = `IDLE`,
  jump = `JUMP`,
  fall = `FALL`,
  run = `RUN`,
  dizzy = `DIZZY`,
  sit = `SIT`,
  roll = `ROLL`,
  bite = `BITE`,
  ko = `KO`,
  getHit = `GET_HIT`,
}
export enum EnumFrameDogState {
  idle = 7,
  jump = 7,
  fall = 7,
  run = 9,
  dizzy = 11,
  sit = 4,
  roll = 7,
  bite = 7,
  ko = 12,
  getHit = 4,
}

export type TImageState = {
  [key in EnumDogState]?: {
    frame: number;
    loc: Array<{ x: number; y: number }>;
  };
};

export default abstract class IMainController {
  protected myName = `shantanu`;
  getCompiledDogState(inputs: {
    spriteHeight: number;
    spriteWidth: number;
  }): TImageState {
    let dogState: any = {};
    let countItem = 0;
    for (const iterator in EnumDogState) {
      const temp: string = (EnumDogState as any)[iterator];
      dogState[temp] = { frame: (EnumFrameDogState as any)[iterator] };
      dogState[temp].loc = [];
      for (let frameIndex = 0; frameIndex < dogState[temp].frame; frameIndex++)
        dogState[temp].loc.push({
          y: countItem * inputs.spriteHeight,
          x: frameIndex * inputs.spriteWidth,
        });
      countItem++;
    }
    return dogState;
  }
}
