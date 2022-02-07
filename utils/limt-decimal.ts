/**
 * Limits decimal value to first two decimals.
 * ----
 * @params value - number to to limit.
 * @returns number - value fixed to first two decimal places
 * @example 3.12345 -> 3.12
 * */
export function limitDecimal(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100
}
