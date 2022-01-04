const SantasBag = require('./bag.js');
const Present = require('./present.js');

const etch = new Present("Etch-a-Sketch", "Jimmy", "June", 10);
const socks = new Present("Fuzzy wool socks to keep your toes warm", "Sandie", "John", 7);
const candle = new Present("Hand-poured candle with a wood wick", "Sandie", "Chris", 15);
const book = new Present("JavaScript: The Good Parts", "Ellie", "Sam", 29.50);

console.log(etch);
console.log(socks);
console.log(book);
console.log(candle);

const bag = new SantasBag([etch, socks, book, candle]);

console.log(bag);
console.log(bag.getGifts("Sandie"));