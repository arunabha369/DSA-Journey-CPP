var timeLimit = function(fn, t) {
    return async function(...args) {

        // A promise that rejects after t ms
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        // Race fn(...args) against timeout
        return Promise.race([
            fn(...args),
            timeoutPromise
        ]);
    }
};
