function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("message: delayed succeess"), 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("delayed exception!"), 500);});
}

resolvedPromise()
    .then(msg => console.log(msg))
    .catch(error => console.error("error:", error));
rejectedPromise()
    .then(msg => console.log(msg))
    .catch(error => console.error("error:", error));

