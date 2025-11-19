const compose = functions => x =>
    functions.reduceRight((acc, fn) => fn(acc), x);
