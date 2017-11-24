export function warn(msg: string) {
  if (console && typeof console.warn === 'function') {
    // tslint:disable-next-line:no-console
    console.warn(msg)
  }
}

export function error(msg: string, needThrow: boolean = false) {
  if (needThrow) {
    throw new Error(msg)
  }
  if (console && typeof console.error === 'function') {
    // tslint:disable-next-line:no-console
    console.error(msg)
  }
}
