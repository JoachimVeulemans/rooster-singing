/*
 * MIT License
 */

interface Array<T> {
    sum<Number>(): number;
}

Array.prototype.sum = function(): number {
    return this.reduce((a, b) => a + b, 0);
};
