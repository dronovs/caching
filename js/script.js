'use strict';
const cache = new Map();

function caching (func) {

    return function (result) {
        if (!cache.has(func.name) && cache.size <= 9) {
            result = func();
            console.log('Adding to cache');
            cache.set(func.name, result);
        } else if (!cache.has(func.name) && cache.size > 9) {
            console.log('Adding to cache');
            const cacheKeys = cache.keys();
            const currentKey = cacheKeys.next().value;
            cache.delete(currentKey);
            result = func();
            cache.set(func.name, result);
        } else {
            console.log('Getting from cache');
        }

        return cache.get(func.name);
    }
}

function sumFunction () {
    return 1 + 1;
}

function differenceFunction() {
    return 4 - 1;
}

function one() {return 1}
function two() {return 2}
function three() {return 3}
function four() {return 4}
function five() {return 5}
function six() {return 6}
function seven() {return 7}
function eight() {return 8}
function nine() {return 9}
function ten() {return 10}

const sum = caching(sumFunction);
const diff = caching(differenceFunction);
const oneFunc = caching(one);
const twoFunc = caching(two);
const threeFunc = caching(three);
const fourFunc = caching(four);
const fiveFunc = caching(five);
const sixFunc = caching(six);
const sevenFunc = caching(seven);
const eightFunc = caching(eight);
const nineFunc = caching(nine);
const tenFunc = caching(ten);


console.log('first', sum());
console.log('second', diff());
console.log('one', oneFunc());
console.log('two', twoFunc());
console.log('three', threeFunc());
console.log('four', fourFunc());
console.log('five', fiveFunc());
console.log('six', sixFunc());
console.log('seven', sevenFunc());
console.log('eight', eightFunc());
console.log('nine', nineFunc());
console.log('ten', tenFunc());
console.log('ten', tenFunc());

console.log(cache);
