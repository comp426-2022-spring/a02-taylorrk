import { coinFlip, countFlips, coinFlips, flipACoin } from './modules/coin.mjs';

if (process.argv.length < 3) {
    console.log(coinFlip());
}
else {
    const myArgs = process.argv.slice(2);
    const myArgs1 = myArgs[0];
    var myArgs2 = myArgs1.charAt(9);
    if (myArgs2 == null) {
        console.log(coinFlip());
    }
    else {
        var i = 10;
        while (i < myArgs1.length) {
            myArgs2 = myArgs2 + myArgs1.charAt(i);
            i = i + 1;
        }
        var final = parseInt(myArgs2);
        var listOfCoins = coinFlips(final);
        console.log('', listOfCoins);
        var final = countFlips(listOfCoins);
        console.log('', final);
    }
}
