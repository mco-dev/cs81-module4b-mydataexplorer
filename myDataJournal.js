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

function avgSleep(weekData) {
    let totalSleep = 0;
    for (let i = 0; i < weekData.length; i++) {
        totalSleep += weekData[i].sleepHours;
    }
    return Math.round(totalSleep / weekData.length);
}

function avgMood(weekData) {
    let myMood = {};
    let moodCount = 0;
    for (let feeling of weekData) { // Loop through each day's data
        if (myMood[feeling.mood]) { // Check if the mood already exists in the object
            myMood[feeling.mood] += 1; // Increment if found
        } else {
            myMood[feeling.mood] = 1; // Add it to the list if not found
        }
    }
    for (let mood in myMood) {
        if (myMood[mood] > moodCount) {
            moodCount = myMood[mood];
        }
    }
    return weekData[moodCount].mood; // Return the most common mood (highest count)
}

function mostProductiveDay(weekData) {
    let productiveDay = weekData[0];
    for (let i = 1; i < weekData.length; i++) {
        if (weekData[i].challengesSolved > productiveDay.challengesSolved) {
            productiveDay = weekData[i];
        }   
    }
    return productiveDay;
}

console.log(`Day with maximum screen time: ${maxScreenTimeDay(weekData).day}`);

console.log(`Average sleep hours: ${avgSleep(weekData)}`);

console.log(`Most common mood: ${avgMood(weekData)}`);

console.log(`Most productive day: ${mostProductiveDay(weekData).day}`);
