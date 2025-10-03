const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings',  'caKE', 'DUDE'];

function lowerCaseWords(array) {
    return new Promise((resolve, reject) =>{
        if (!Array.isArray(array)) {
            reject("Input is not array");
        }else {
            const filtered = array.filter(item =>typeof item === 'string')
                                .map(word => word.toLowerCase());
            resolve(filtered);
        }
    });}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
