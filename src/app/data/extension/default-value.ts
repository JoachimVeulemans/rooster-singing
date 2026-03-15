/*
 * MIT License
 */

/*
 * Returns the given value if it is not null or undefined, otherwise returns the default value.
 */

export const stringOrDefault = (value?: string, defaultValue: string = '') => typeof value === 'string' ? value.toString() : defaultValue;
export const numberOrDefault = (value?: number, defaultValue: number = 0) => typeof value === 'number' ? Number(value) : defaultValue;
export const arrayOrDefault = <T>(value?: T[], defaultValue: T[] = []) => Array.isArray(value) ? value : defaultValue;
export const dateOrDefault = (value?: Date, defaultValue: Date = new Date()) => value ? new Date(value) : defaultValue;
export const booleanOrDefault = (value?: boolean, defaultValue: boolean = false) => value ?? defaultValue;
