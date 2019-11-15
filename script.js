// scripts go here

// the app
ipsumbucksApp = {};

// array of possible text that will appear at the beginning of generated ipsum (length: 6)
ipsumbucksApp.startText = ["I want a", "I'd like a", "I would like a", "I'll have a", "Gimme a", "I'll get a"];

// array of main text content of generated ipsum string (length: 25)
ipsumbucksApp.mainText = 
["vanilla", "chocolate", "orange", "pumpkin spice", "peppermint", 
"kids temp", "extra hot", "decaf", "extra shot", "half-caf", 
"solo", "double", "dopio", "triple grande", "light foam",
"non-dairy", "soy", "almond", "matcha", "one pump", 
"with", "hold the", "no", "extra", "secret menu",];

// array of possible text that will appear at the end of generated ipsum (length: 5)
ipsumbucksApp.endText = ["latte", "cappuccino", "americano", "espresso", "phrappuccino"];

// empty string that will be concatonated into the final ipsum output.
ipsumbucksApp.ipsumOutput = "";


// this function returns a randomly generated string,
// the size of which is governed by the value of lengthLimit
// !! lengthLimit is NOT the word count, only loop iterations.
ipsumbucksApp.stringMaker = function(lengthLimit) {

    let randChecker = -1; // initialized below lowest string array value for mainText generation only.
    let theString = "";  // empty string that will be concatonated and returned.

    // this method provides random array locations in order to build unique ipsum strings.
    // max is the length of the array this random number will be applied to.
    // checkPrevious update to the last generated number to prevent repeat words in ipsum.
    function getRandomNumber(max, checkPrevious) {
        let num = ( Math.floor( Math.random() * max ) );

        // checks for and prevents repeat word locations.
        while (num === checkPrevious) {
            num = ( Math.floor( Math.random() * max) );
        };

        // update repeat checker for next loop
        checkPrevious = num;

        return checkPrevious;
    };  // getRandomNumber(max, checkPrevious)

    // this loop builds the ipsum string.
    // lengthLimit is a value passed in by the user
    // eg: tall=15, grande=30, venti=50
    for (let x = 0; x < lengthLimit; x++) {
        let nextString = "";

        if (x === 0) {
            // for beginning of ipsum string only
            let n = ( Math.floor(Math.random() * ipsumbucksApp.startText.length) );

            nextString = ipsumbucksApp.startText[n];

        } else if (x < (lengthLimit - 1) ) {
            // for main content of ipsum string - everything excepting the first and last loop.
            // getRandomNumber prevents repeats in ipsum string.
            let n = getRandomNumber(ipsumbucksApp.mainText.length, randChecker);
            
            // update randChecker to prevent repeats
            randChecker = n; 

            // add a comma every 6 iterations, for variety
            // otherwise append the string with a space, as usual
            if ( x % 5 === 0) {
                nextString = " " + ipsumbucksApp.mainText[n] + ",";
            } else {
                nextString = " " + ipsumbucksApp.mainText[n];
            }

        } else {
            // for end of ipsum string only
            let n = (Math.floor(Math.random() * ipsumbucksApp.endText.length));
            nextString = " " + ipsumbucksApp.endText[n] + ".";
        }

        // concatonate ipsum string with nextString's current value 
        theString += nextString;
    } // for loop

    // final completed ipsum string
    return theString;
    
};  // ipsumbucksApp.stringMaker(theString, limit)


// execution on button click
$(function () {

    // size value from radio buttons that define ipsum length
    let ipsumSize = $('input[type="radio"]:checked').val();
    console.log(ipsumSize);

    // generate a string based on the integer value of ipsumSize
    ipsumbucksApp.ipsumOutput = ipsumbucksApp.stringMaker(ipsumSize);
    console.log(ipsumbucksApp.ipsumOutput);

    // $('input[type="radio"]').on('click', function() {
    //     console.log( $(this).val() );
    // });

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