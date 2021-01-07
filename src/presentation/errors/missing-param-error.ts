export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`MissingParam: ${paramName}`);
    this.name = 'MissingParamError'
  }
}
