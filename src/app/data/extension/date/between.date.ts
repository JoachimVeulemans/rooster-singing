/*
 * MIT License
 */

interface Date {
    between(min: Date, max: Date): boolean;
}

Date.prototype.between = function(min: Date, max: Date): boolean {
    const minTime = Math.min(min.getTime(), max.getTime());
    const maxTime = Math.max(min.getTime(), max.getTime());
    const currentTime = this.getTime();
    return minTime < currentTime && currentTime < maxTime;
};