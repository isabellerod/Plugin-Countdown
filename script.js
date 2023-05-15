import Countdown from './countdown.js';

const daysToChristmas = new Countdown ('25 December 2023');

console.log(daysToChristmas.total);
setInterval(() => {
    console.log(daysToChristmas.total);
}, 1000)