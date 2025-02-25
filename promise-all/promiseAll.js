function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('needs to be an array'))
        }

        let results = []
        let total = promises.length;
        let completed = 0

        if (total === 0) {
          return resolve([]);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(value => {
                results[index] = value
                completed++

                if (completed === total) {
                    resolve(results)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    })
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve('foo'), 100);
});

promiseAll([p0, p1, p2]).then(console.log).catch(console.error);

const p3 = Promise.resolve(30);
const p4 = new Promise((_, reject) => {
  setTimeout(() => reject('An error occurred!'), 100);
});

promiseAll([p3, p4]).then(console.log).catch(console.error);