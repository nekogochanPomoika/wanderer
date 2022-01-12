type GlobalI = {
  time : number
  readonly objectTypes : {
    readonly NONE : number
    readonly WALL : number
    readonly PLAYER : number
  }
}

export const Global : GlobalI = {
  time: 0,
  objectTypes: {
    NONE: 0,
    WALL: 1,
    PLAYER: 2
  }
};
