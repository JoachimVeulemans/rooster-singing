/*
 * MIT License
 */

interface Number {
    between(min: number, max: number): boolean;
}

Number.prototype.between = function(min: number, max: number): boolean {
    const minimum = Math.min.apply(Math, [min, max]);
    const maximum = Math.max.apply(Math, [min, max]);
    return minimum < Number(this) && Number(this) < maximum;
};
