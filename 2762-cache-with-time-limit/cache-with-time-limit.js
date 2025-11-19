var TimeLimitedCache = function() {
    // Map<key, { value, timerId }>
    this.map = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    // If key exists, it's un-expired because expired keys are removed.
    const existed = this.map.has(key);

    // If there is an existing timer, clear it (we're overwriting).
    if (existed) {
        clearTimeout(this.map.get(key).timerId);
    }

    // Schedule removal after `duration` ms
    const timerId = setTimeout(() => {
        this.map.delete(key);
    }, duration);

    // Store the value and timer id
    this.map.set(key, { value, timerId });

    return existed;
};

TimeLimitedCache.prototype.get = function(key) {
    const entry = this.map.get(key);
    return entry ? entry.value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.map.size;
};
