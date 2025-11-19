var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        const total = functions.length;

        functions.forEach((fn, index) => {
            // Start each async function immediately (parallel execution)
            fn()
                .then(value => {
                    results[index] = value;      // store in correct order
                    completed += 1;

                    // When all are completed → resolve final promise
                    if (completed === total) {
                        resolve(results);
                    }
                })
                .catch(err => {
                    // Reject immediately on first failure
                    reject(err);
                });
        });
    });
};
