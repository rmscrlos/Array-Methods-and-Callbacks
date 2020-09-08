import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// console.log("---------------------------------- \n----------------------------------")
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final  
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

    const year2014 = fifaData.filter( (e) => e.Year === 2014 && e.Stage === 'Final');

    // (a)
    // console.log(year2014[0]["Home Team Name"]);

    // (b)
    // console.log(year2014[0]["Away Team Name"]);

    // (c)
    // console.log(year2014[0]["Home Team Goals"]);

    // (d)
    // console.log(year2014[0]["Away Team Goals"]);

    // (e)
    let away = year2014[0]["Away Team Goals"];
    let home = year2014[0]["Home Team Goals"];
    let worldCupWinner = "";
    if(home > away){
        worldCupWinner = year2014[0]["Home Team Name"];
    } else {
        worldCupWinner = year2014[0]["Away Team Name"];
    }

    // console.log(worldCupWinner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

    function getFinals(array) {

        return array.filter(array => array.Stage === "Final");

    };

    // getFinals(fifaData);

    console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

    function getYears(callback) {
        let years = [];
        callback.forEach( e => years.push(e.Year));
        return years;
    }

    // getYears(getFinals(fifaData));
    // console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

    function getWinners(callback) {
        let winners = [];

        callback.forEach((element) => {
            if (element["Home Team Goals"] === 0 && element["Away Team Goals"] === 0) {
                if(winners.includes(element["Home Team Name"])){
                    winners.push(element["Home Team Name"]);
                } else {
                    winners.push(element["Away Team Name"]);
                }
            } else if (element["Home Team Goals"] > element["Away Team Goals"]){
                winners.push(element["Home Team Name"])
            } else {
                winners.push(element["Away Team Name"]);
            }
        });
        

        return winners;

    };

    // getWinners(getFinals(fifaData));

    console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


function getWinnersByYear(cb, cb2) {
   
    let countries = [];
    let years = [];

   
        cb(getFinals(fifaData)).forEach(element =>  countries.push(element))

        cb2(getFinals(fifaData)).forEach(element => years.push(element))
        
        for(let i = 0; i < countries.length; i++){
            console.log(`In ${years[i]}, ${countries[i]} won the world cup!`)
        }
    

}

// getWinnersByYear(getWinners, getYears);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const avgGoalsHome = data.reduce((total, item) => total += item['Home Team Goals'] / data.length, 0);

    const avgGoalsAway = data.reduce((total, item) => total += item['Away Team Goals'] / data.length, 0);
    
    console.log(`This is the avg. goals of Home Teams: ${avgGoalsHome} \n\nThis is the avg. goals of Away Teams: ${avgGoalsAway}`)

};

// getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    let mostGoals = [];
    let finals = data.filter(e => e.Stage === 'Final');
    finals.forEach((element) => {
        if(element["Home Team Goals"] > element["Away Team Goals"]) {
            mostGoals.push(`${element["Home Team Name"]} scored:  ${element["Home Team Goals"]}`);
        } else {
            mostGoals.push(`${element["Away Team Name"]} scored:  ${element["Away Team Goals"]}`);
        }
    })
    console.log(finals, mostGoals);

};

// getGoals(fifaData);


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
