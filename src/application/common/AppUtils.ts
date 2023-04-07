export class AppUtils {
  public setAllClassValues<T>(obj: any, keyValues: Partial<T>) {
    for (const key of Object.keys(keyValues)) {
      obj[key] = (<any>keyValues)[key]
    }
  }
}
