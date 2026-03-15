/*
 * MIT License
 */

interface Array<T> {
    max(selector: (element: T) => number): T | undefined;
}

Array.prototype.max = function <T>(selector: (element: T) => number): T | undefined {
    if (this.length === 0) {
        return undefined;
    }

    return this.reduce((maxElement, currentElement) =>
        selector(currentElement) > selector(maxElement) ? currentElement : maxElement
    );
};