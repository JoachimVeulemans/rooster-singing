/*
 * MIT License
 */

interface Array<T> {
    min(selector: (element: T) => number): T | undefined;
}

Array.prototype.min = function <T>(selector: (element: T) => number): T | undefined {
    if (this.length === 0) {
        return undefined;
    }

    return this.reduce((minElement, currentElement) =>
        selector(currentElement) < selector(minElement) ? currentElement : minElement
    );
};