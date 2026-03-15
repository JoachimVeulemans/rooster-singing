/*
 * MIT License
 */

interface Array<T> {
    distinct(keySelector?: (item: T) => any): T[];
}

Array.prototype.distinct = function<T>(this: T[], keySelector?: (item: T) => any): T[] {
    const uniqueSet = new Set<T>();
    return this.filter(obj => {
        const key = keySelector ? keySelector(obj) : JSON.stringify(obj);
        const isUnique = !uniqueSet.has(key);
        if (isUnique) {
            uniqueSet.add(key);
        }
        return isUnique;
    });
};
