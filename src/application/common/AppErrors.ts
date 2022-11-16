export default class AppErrors extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);
  }
}
