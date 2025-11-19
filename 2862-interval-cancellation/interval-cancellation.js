/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // call immediately
    fn(...args);

    // schedule repeated calls every t ms
    const id = setInterval(() => {
        fn(...args);
    }, t);

    // return cancel function that stops the interval
    return function cancel() {
        clearInterval(id);
    };
};
