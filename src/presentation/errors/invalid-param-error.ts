export class InvalidParamError extends Error {
    constructor(paramName: string) {
      super(`InvalidParam: ${paramName}`);
      this.name = 'InvalidParamError'
    }
  }
  