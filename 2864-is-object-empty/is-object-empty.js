var isEmpty = function(obj) {
    for (let key in obj) {
        return false;   // Found at least one key → not empty
    }
    return true;        // No keys found → empty
};
