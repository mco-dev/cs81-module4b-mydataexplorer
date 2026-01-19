/*
In myDataJournal.js, define an array named weekData with 7 objects, one for each day. Use your real or realistic data:
day (string)
sleepHours (number)
screenTime (hours)
mood (string)
challenges solved (number)
focusLevel (1–10)
*/
// Sample data for a week containing all fields to be tracked
const weekData = [
  {
    day: "Monday",  
    sleepHours: 6,
    screenTime: 3,
    mood: "Tired",
    challengesSolved: 2,
    focusLevel: 5
  },
  {   
    day: "Tuesday",
    sleepHours: 7,
    screenTime: 4,
    mood: "Normal",
    challengesSolved: 2,
    focusLevel: 6
  },
  {
    day: "Wednesday",
    sleepHours: 8,
    screenTime: 3,
    mood: "Happy",
    challengesSolved: 3,
    focusLevel: 8
  },
  {
    day: "Thursday",
    sleepHours: 7,
    screenTime: 2,
    mood: "Tired",
    challengesSolved: 1,
    focusLevel: 6
  },
  {
    day: "Friday",
    sleepHours: 8,
    screenTime: 3,
    mood: "Happy",
    challengesSolved: 2,
    focusLevel: 7
  },
  {
    day: "Saturday",
    sleepHours: 8,
    screenTime: 1,
    mood: "Happy",
    challengesSolved: 1,
    focusLevel: 10
  },
  {
    day: "Sunday",
    sleepHours: 6,
    screenTime: 2,
    mood: "Anxious",
    challengesSolved: 1,
    focusLevel: 8
  }
];

// I predict that in the middle of the week my level of focus will be greater due to increased hours of sleep and number of challenges solved.
// Tuesday had the most screen time possible due to a lower level of focus.

function maxScreenTimeDay(weekData) {
    let maxDay = weekData[0];
    for (let i = 1; i < weekData.length; i++) {
        if (weekData[i].screenTime > maxDay.screenTime) {
            maxDay = weekData[i];
        }
    }
    return maxDay;
}

console.log(`Day with maximum screen time: ${maxScreenTimeDay(weekData).day}`);
