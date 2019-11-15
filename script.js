// scripts go here

ipsumbucksApp = {};

// text that will appear at the beginning of generated ipsum (length: 4)
ipsumbucksApp.startText = ["I want a", "I'd like a", "I would like a", "I'll have a"];

// main text content of generated ipsum string (length: 20)
ipsumbucksApp.mainText = 
["vanilla", "chocolate", "orange", "pumpkin spice", "peppermint", 
"kids temp", "extra hot", "decaf", "extra shot", "half-caf", 
"solo", "double", "dopio", "triple grande", "light foam",
"non-dairy", "soy", "almond", "extra matcha", "one pump",];

// text that will appear at the end of generated ipsum (length: 5)
ipsumbucksApp.endText = ["latte", "cappuccino", "americano", "espresso", "phrappuccino"];

// empty string that will be concatonated into the final output.
ipsumbucksApp.ipsumOutput = "";



// this function with build the ipsum string onto a string argument of a length stipulated by limit
ipsumbucksApp.stringMaker = function(lengthLimit) {

    let randChecker = -1; // initialized below lowest string array value for mainText generation only.
    let theString = "";

    // this method provides random array locations in order to build unique ipsum strings
    // example: randomizer(20) will generate numbers between 0 & 19
    function getRandomNumber(max, checkPrevious) {
        let num = ( Math.floor( Math.random() * max ) );

        while (num === checkPrevious) {
            num = ( Math.floor( Math.random() * max) );
        };

        checkPrevious = num;
        return checkPrevious;
    };  // getRandomNumber(max, checkPrevious)

    for (let x = 0; x < lengthLimit; x++) {
        let nextString = "";

        if (x === 0) {
            // for beginning of ipsum string only
            let n = ( Math.floor(Math.random() * 4) );

            nextString = ipsumbucksApp.startText[n];

        } else if (x < (lengthLimit - 1) ) {
            // for main content of ipsum string 
            // this function prevents repeats in ipsum
            let n = getRandomNumber(20, randChecker);
            
            // update randChecker to prevent repeats
            randChecker = n; 

            nextString = " " + ipsumbucksApp.mainText[n];
        } else {
            // for end of ipsum string only
            let n = (Math.floor(Math.random() * 5));
            nextString = " " + ipsumbucksApp.endText[n] + ".";
        }

        theString += nextString;
    } // for loop

    return theString;

    // KEEP IN MIND
    // for (let x = 0; x < 100; x++) {
    //     console.log(`\nCurrent checker: ${randChecker}`);
    //     randChecker = getRandomNumber(20, randChecker);
    //     console.log(`Random number: ${randChecker}`)
    // }
    
};  // ipsumbucksApp.stringMaker(theString, limit)


$(function () {
    // put code here!!
    ipsumbucksApp.ipsumOutput = ipsumbucksApp.stringMaker(50);
    console.log(ipsumbucksApp.ipsumOutput);

});


// ---- MVP Pseudo code, user clicks the 'generate ipsum' button ----

// if there is content already displayed on the text area, it is cleared.

// initialize variables

// a for loop initiates and will repeat as many times as stipulated by 
// the radio button value that is selected small=15 medium = 30 large=50.
// * medium will be selected by default.

// during the first run of the loop, a blank string is initialized, an initial phrase is 
// randomly selected from an initial phrase array and is appended to the string.

// from the second until the second-last runs of the loop, additional words are appended to the 
// string -- an if statement confirms that no word repeats twice in a row.

// a comma is added after every 6th word, for variety.

// on the last run of the loop a final beverage word - selected randomly from a
// beverage array - and a period are appended to the string.

// the string value is then assigned to the document's text area.