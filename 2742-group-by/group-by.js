Array.prototype.groupBy = function(fn) {
    const result = {};

    for (const item of this) {
        const key = fn(item);

        if (!result[key]) {         // if key doesn't exist, create new array
            result[key] = [];
        }

        result[key].push(item);     // push item into the correct group
    }

    return result;
};
