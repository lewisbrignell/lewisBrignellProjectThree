// Pseudo code for Lewis Brignell's Project 3 propsal

// ---- MVP SUMMARY ----

// Name: Baripsum (Barista + ipsum, geddit?!)

// Purpose: Baripsum is a Lorem ipsum text generator 
//          that contains cafe words and phrases 
//          that baristas or customers might say.

// Context: I've worked twice as a barista, once at Starbucks.
//          More than a few customers expressed their individuality
//          with very detailed drink orders.

// Please see attache wireframe for UI context

// ---- MVP Summary ----
// The user will see a form on the page directing
// them to generate Barista lorem ipsum text.
// The user will only have the ability to click a
// 'generate' button.


// ---- MVP Pseudo code, user clicks the 'generate ipsum' button ----

// if there is content already displayed on the text area, it is cleared.

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


// ---- Stretch Goals ----

// 1. a medium radio option (medium = 30)
// 2. a clear/reset button
// 3. dark mode

//     OR!

// cup name generator



