// scripts go here

ipsumbucksApp = {};

// text that will appear at the beginning of generated ipsum (length: 4)
ipsumbucksApp.startText = ["I want a", "I'd like a", "I would like a", "I'll have a"];

// main text content of generated ipsum string (length: 20)
ipsumbucksApp.mainText = 
["vanilla", "chocolate", "orange", "pumpkin spice", "peppermint", 
"kids temp", "extra hot", "decaf", "extra shot", "half-caf", 
"solo", "double", "dopio", "triple grande", "light foam",
"non-dairy", "soy", "with almond", "extra matcha", "one pump",];

// text that will appear at the end of generated ipsum (length: 5)
ipsumbucksApp.endText = ["latte", "cappuccino", "americano", "espresso", "phrappuccino"];


$(function () {
    // put code here!!
    
    // ipsumbucksApp.mainText.forEach(function() {
    //     console.log("this:" + ipsumbucksApp.mainText);
    // });

});


// ---- MVP Pseudo code, user clicks the 'generate ipsum' button ----

// if there is content already displayed on the text area, it is cleared.

// initialize variables

// a for loop initiates and will repeat as many times as stipulated by 
// the radio button value that is selected small=20 large=50.
// * small will be selected by default.

// during the first run of the loop, a blank string is initialized, an initial phrase is 
// randomly selected from an initial phrase array and is appended to the string.

// from the second until the second-last runs of the loop, additional words are appended to the 
// string -- an if statement confirms that no word repeats twice in a row.

// a comma is added after every 6th word, for variety.

// on the last run of the loop a final beverage word - selected randomly from a
// beverage array - and a period are appended to the string.

// the string value is then assigned to the document's text area.