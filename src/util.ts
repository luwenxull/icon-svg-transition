export function warn(msg) {
  if (typeof console.warn === 'function') {
    // tslint:disable-next-line:no-console
    console.warn(msg)
  }
}
