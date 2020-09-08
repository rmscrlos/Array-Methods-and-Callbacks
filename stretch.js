import { fifaData } from './fifa.js';

// After you have completed the requirements, create a new file called `stretch.js` and practice with Array methods more.

// See if you can complete one or more of the following challenges:

// - [ ] Create a function that takes country initials as a parameter and returns their total number of World Cup appearances.
// - [ ] Account for ties in your 'finals' data set
// - [ ] Create a function that takes country initials as a parameter and determines how many goals that country has scored in World Cup games since 1930.
// - [ ] Use `.map` to format country names into `<h1>` HTML headers.
// -------------------------------------



// - [ ] Account for ties in your 'finals' data set

function getFinals(array) {

  return array.filter(array => array.Stage === "Final");

};

function accountTies(callback) {
  
  let winners = [];
  callback.forEach((element) => {
      if (element["Home Team Goals"] === 0 && element["Away Team Goals"] === 0){
         winners.push(`${element["Home Team Name"]} and ${element["Away Team Name"]} tied!`);
      } else if (element["Home Team Goals"] > element["Away Team Goals"]){
        winners.push(element["Home Team Name"]);
      } else {
        winners.push(element["Away Team Name"]);
      }
  });
  return winners

};

console.log(accountTies(getFinals(fifaData)));