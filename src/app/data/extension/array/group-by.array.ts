/*
 * MIT License
 */

interface Array<T> {
    groupBy(keyGetter: (item: T) => any): { [key: string]: T[] };

    groupByAsArray(keyGetter: (item: T) => any): T[][];
}

Array.prototype.groupBy = function <T>(keyGetter: (item: T) => any): { [key: string]: T[] } {
    const grouped: { [key: string]: T[] } = {};

    this.forEach(item => {
        const key = keyGetter(item)?.toString();
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
    });

    return grouped;
};

Array.prototype.groupByAsArray = function <T>(keyGetter: (item: T) => any): T[][] {
    const grouped: { [key: string]: T[] } = {};
    const listOfKeys: string[] = [];
    this.forEach(item => {
        const key = keyGetter(item).toString();
        if (!grouped[key]) {
            grouped[key] = [];
            listOfKeys.push(key);
        }
        grouped[key].push(item);
    });

    return listOfKeys.map(key => grouped[key]);
};
