import { coinFlip, countFlips, coinFlips, flipACoin } from './modules/coin.mjs';

if (process.argv.length < 3) {
    console.log('Error: no input');
}
else {
    const myArgs = process.argv.slice(2);
    var myArgs1 = myArgs[0];
    var myArgs2 = myArgs1.charAt(7);
    var i = 8;
    while (i < myArgs1.length) {
        myArgs2 = myArgs2 + myArgs1.charAt(i);
        i = i + 1;
    }
    
    var guessFlips = new Object()
    guessFlips.call;
    guessFlips.flip;
    guessFlips.result;

    if (myArgs2 == 'tails') {
        guessFlips.call = 'tails';
        var newCoin = coinFlip();
        guessFlips.flip = newCoin;
        if (newCoin == 'tails') {
            guessFlips.result = 'win';
        }
        else {
            guessFlips.result = 'lose';
        }
        console.log(guessFlips);

    }

    else if (myArgs2 == 'heads') {
        guessFlips.call = 'heads';
        var newCoin = coinFlip();
        guessFlips.flip = newCoin;
        if (newCoin == 'heads') {
            guessFlips.result = 'win';
        }
        else {
            guessFlips.result = 'lose';
        }
        console.log(guessFlips);

    }
    else {
        console.log('Error: no input');
    }



    
}