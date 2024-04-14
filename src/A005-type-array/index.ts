// Array<T> = T[]

export function mutiplicaArgs(...args: Array<number>): number{
  return args.reduce((ac, value) => ac * value, 1)
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value)
}