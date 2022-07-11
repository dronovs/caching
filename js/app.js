'use strict';

const cache = new WeakMap();

function caching(obj) {
    if (!cache.has(obj)) {
        console.log('Saving to cache...');
        let result = obj.name;
        cache.set(obj, result);
    } else {
        console.log('getting from cache');
    }
    console.log(cache);
    return cache.get(obj);
}

let objectOne = {name: 'Serhii', lastName: 'Dronov', position: 1};
let objectTwo = {name: 'Shifu', lastName: 'Dronov', position: 3};


let result = caching(objectOne);
console.log(result);
console.log(caching(objectOne));

let resultTwo = caching(objectOne);
console.log(resultTwo);

let cat = caching(objectTwo);
console.log(cat);
let catTwo = caching(objectTwo);
console.log(catTwo);