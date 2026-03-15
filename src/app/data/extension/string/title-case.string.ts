/*
 * MIT License
 */

interface String {
    titleize(): string;
}

String.prototype.titleize = function(): string {
    return this.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};
