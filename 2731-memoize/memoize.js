function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = function(...args) {
        const key = JSON.stringify(args);   // unique key for arguments

        if (cache.has(key)) {
            return cache.get(key);          // return cached result
        }

        const result = fn(...args);         // compute result
        cache.set(key, result);             // store in cache
        callCount++;                        // count actual calls
        
        return result;
    };

    memoizedFn.getCallCount = () => callCount;

    return memoizedFn;
}
