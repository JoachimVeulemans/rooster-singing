/*
 * MIT License
 */

interface Array<T> {
    sortBy(lambda?: (item: T) => any, direction?: 'asc' | 'desc'): Array<T>;
}

Array.prototype.sortBy = function <T>(lambda?: (item: T) => any, direction: 'asc' | 'desc' = 'asc'): Array<T> {
    const onlyObjects = this.filter(t => t instanceof Object);

    if (onlyObjects.length > 0 && !lambda) {
        if ('displayText' in onlyObjects[0]) {
            lambda = (item: T) => (item as { displayText: string }).displayText.toUpperCase();
        } else if ('id' in onlyObjects[0]) {
            lambda = (item: T) => (item as { id: number }).id;
        }
    }

    return this.sort((b, c) => {
        let bValue = b;
        let cValue = c;

        if (lambda) {
            bValue = lambda(b);
            cValue = lambda(c);
        }

        // Handle undefined values
        if (!bValue && cValue) {
            return 1;
        } else if (bValue && !cValue) {
            return -1;
        } else if (!bValue && !cValue) {
            return 0;
        }

        // Reverse standard comparison if needed
        const reverse = direction === 'asc' ? 1 : -1;

        // Standard comparison
        if (bValue < cValue) {
            return -1 * reverse;
        } else if (bValue > cValue) {
            return 1 * reverse;
        } else {
            return 0;
        }
    });
};
