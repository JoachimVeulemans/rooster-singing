/*
 * MIT License
 */

// Extending the Array prototype with the excludeUndefined method
interface Array<T> {
    excludeUndefined<K extends keyof T>(lambda?: (item: T) => T[K] | undefined): NonNullable<T>[];
}

Array.prototype.excludeUndefined = function <T, K extends keyof T>(this: (T | undefined)[], lambda?: (item: T) => T[K] | undefined): NonNullable<T>[] {
    if (lambda) {
        return this
            .filter((item): item is T => item !== undefined) // Ensure we filter out undefined items
            .filter(item => {
                const key = lambda(item);
                return key !== undefined && key !== null; // Ensure key is defined
            }) as NonNullable<T>[]; // Ensure we return NonNullable<T>[]
    }

    return this.filter((item): item is NonNullable<T> => item !== undefined); // Just filter out undefined
};