

// Date/time- Display current date at the top of the calendar when a user opens the planner
// need to look at moment.js

var timeDisplayEl = $('#time-display'); //Use this refernce for DOM elements??

function displayTime(){
var currentTime = moment().format("MMM Do YY"); 
timeDisplayEl.text(currentTime);

}



 

// Time blocks- Present time blcosk for standard bsiness hours when the suer scroll down



//Appointment blocks- colour coded time blocks based on past, presen and future when time block is viewed


// Type event- Allows user to enter and event when they click a time block-> acton click





//Save function-Save the vet in local storage when the save button is cllciked in that timeblock



//Refresh function- persists events between refreshes of a page



