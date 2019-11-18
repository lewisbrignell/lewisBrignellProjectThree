// scripts go here

// the app
ipsumbucksApp = {};

// array of possible text that will appear at the beginning of generated ipsum (length: 10)
ipsumbucksApp.startText = 
["I want a", "I'd like a", "I would like a", "I'll have a", "Gimme a",
 "I'll get a", "I demand a", "I desperately need a", "How about a", "Gimme your best"];

// array of main text content of generated ipsum string (length: 30)
ipsumbucksApp.mainText = 
["vanilla", "chocolate", "orange", "pumpkin spice", "peppermint", 
"kids temp", "extra hot", "decaf", "extra shot", "half-caf", 
"solo", "double", "dopio", "grande", "light foam",
"non-dairy", "soy", "almond", "matcha", "one pump", 
"with", "hold the", "triple", "extra", "secret menu",
"tall", "red eye", "caramel", "sugar-free", "cinnamon dolce"];

// array of possible text that will appear at the end of generated ipsum (length: 10)
ipsumbucksApp.endText = 
["latte", "cappuccino", "americano", "espresso", "phrappuccino",
"caramel apple spice", "double shot", "macchiato", "cortado", "flat white"];


ipsumbucksApp.init = function() {

    // empty string that will be concatonated into the final ipsum output.
    ipsumbucksApp.ipsumOutput = "";

    // clear the textarea on first visit & on page refresh
    $('textarea').val(ipsumbucksApp.ipsumOutput);

}; // init()

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

};  // ipsumbucksApp.stringMaker(limit)


// execution on button click
$(function () {

    // initialize page
    ipsumbucksApp.init();

    // main ipsum execution on button click
    $('button').on('click', function(e) {

        // prevent default button action (leaving the current page)
        e.preventDefault();

        // size value from radio buttons that define ipsum length
        let ipsumSize = $('input[type="radio"]:checked').val();

        // generate a string based on the integer value of ipsumSize
        ipsumbucksApp.ipsumOutput = ipsumbucksApp.stringMaker(ipsumSize);

        // display ipsum text on web page's text area
        // and automatically highlight ipsum text
        // clarifies to user that text may be copied and altered
        $('textarea').val(ipsumbucksApp.ipsumOutput).select();;

    });

    // when the user selects a radio button, a checkmark icon indicates their choice
    $('input[type = "radio"]').on('click', function() {
        
        // all radio button icons are reset to blank squares
        $('input[type="radio"]').prev().removeClass('fa-check-square').addClass('fa-square');

        // a checkmarked box icon is displayed on the checked radio button
        $(this).prev().toggleClass('fa-square fa-check-square');

    });

    // when the user selects the checkbox icon,
    // its correpsonding radio button is set to checked=true,
    // and a checkmark icon indicates their choice
    $('input[type = "radio"]').prev().on('click', function () {

        // the checkbox corresponding to the clicked icon is
        // set to checked=true
        $(this).next().prop('checked', true)

        // all radio button icons are reset to blank squares
        $('input[type="radio"]').prev().removeClass('fa-check-square').addClass('fa-square');

        // a checkmarked box icon is displayed on the checked radio button
        $(this).toggleClass('fa-square fa-check-square');

    });
    
}); // /document