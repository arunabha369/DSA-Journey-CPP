var debounce = function(fn, t) {
    let timerId = null;

    return function(...args) {
        // If a timer is already running, cancel it
        if (timerId !== null) {
            clearTimeout(timerId);
        }

        // Schedule fn to run after t ms with the latest args
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
