console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
      console.log("Please provide a non-negative count.");
      return;
    }
  
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }

// Example usage:
printOdds(10);


// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (!userName || !age) {
      console.log("Please provide both userName and age.");
      return;
    }
  
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
  }

  // Example usage:
checkAge("John", 18);
  

  // Ecxercise 3 Section
  console.log("EXERCISE 3:\n==========\n");

  function determineQuadrant(x, y) {
    if (x === 0 && y === 0) {
      console.log("The point is at the origin.");
    } else if (x === 0) {
      console.log("(${x}, ${y}) is on the y axis.");
    } else if (y === 0) {
      console.log("(${x}, ${y}) is on the x axis.");
    } else {
      if (x > 0 && y > 0) {
        console.log("(${x}, ${y}) is in Quadrant 1.");
      } else if (x < 0 && y > 0) {
        console.log("(${x}, ${y}) is in Quadrant 2.");
      } else if (x < 0 && y < 0) {
        console.log("(${x}, ${y}) is in Quadrant 3.");
      } else {
        console.log("(${x}, ${y}) is in Quadrant 4.");
      }
    }
  }

  // Example usage:
determineQuadrant(1, 2);

  // Excercise 4 Section
console.log("EXERCISE 4:\n==========\n");

  function triangleType(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle");
      } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles triangle");
      } else {
        console.log("Scalene triangle");
      }
    } else {
      console.log("Invalid triangle");
    }
  }

// Example usage:
triangleType(1, 2, 2);

  // Excercise 5 section 
  console.log("EXERCISE 5:\n==========\n");

  function dataPlanStatus(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const averageDailyUse = usage / day;
  
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUse.toFixed(3)} GB/day`);
  
    if (averageDailyUse > planLimit) {
      const excessUsage = (averageDailyUse - planLimit) * daysRemaining;
      console.log(`You are EXCEEDING your average daily use (${averageDailyUse.toFixed(3)} GB/day),`);
      console.log(`continuing this high usage, you'll exceed your data plan by ${excessUsage.toFixed(1)} GB.`);
      const maxDailyUseToStayBelow = planLimit / daysRemaining;
      console.log(`To stay below your data plan, use no more than ${maxDailyUseToStayBelow.toFixed(3)} GB/day.`);
    } else {
      const remainingData = planLimit - usage;
      const remainingDailyUse = remainingData / daysRemaining;
      console.log(`You have ${remainingData.toFixed(1)} GB remaining.`);
      console.log(`You can afford to use ${remainingDailyUse.toFixed(3)} GB/day to stay within your data plan.`);
    }
  }
  
  // Example usage:
  dataPlanStatus(100, 15, 56);