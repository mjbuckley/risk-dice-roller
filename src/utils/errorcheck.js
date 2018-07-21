// SAMPLE REDUX STATE
{
  userRollInfo: {
    "attackArmies": 10,
    "defendArmies": 5,
    "attackRollNum": 3,
    "defendRollNum": 2,
    "stopNum": '',
    "stopDifferential": ''
  },
  "errorMessages": {
    "attackArmies": '',
    "defendArmies": '',
    "attackRollNum": '',
    "defendRollNum": '',
    "stopNum": '',
    "stopDifferential": ''
  },
  "results" {
    "history": [].
    "attack": 4,
    "defense": 0,
    "notes": ''
    // probably need to add a few things
  }
}


functionCalledWhenButtonClicked = () => {

  // convert user submission to useable form
  let parsedSubmission = parseSubmission(state.userRollInfo);

  // Check for errors in submission. Returns an array containing the errors, otherwise an empty array.
  let errors = validateSubmission(parsedSubmission);

  // If there are errors we need to abort and return errors to the user
  if (errors.length > 0) {
    // Somehow add the errors in the array to the Redux state.
  }

  // At this point we know the submission is valid and can proceed. The rolling process is handled
  // by the rollTillStop function. It takes an object with the same values as userRollInfo but with
  // the addtion of a last roll array, a history array, and a message string. Add those here, then
  // call rollTillStop(). NOTE THAT I CAN PROBABLY DO LESS FOR LASTROLL, BUT LEAVING FOR NOW.
  parsedSubmission.lastRoll = {
    attackRolls: [],
    defendRolls: [],
    attackResult: 0,
    defendResult: 0
  };
  parsedSubmission.history = [];
  parsedSubmission.message = "";

  rollTillStop(parsedSubmission);
};



// Note that the first time rollTillStop() is called it is called with the already validated
// paresedSubmission. This is why I can assume that the object it is called with it good.
rollTillStop = (rollInfo) => {

  // Add current status to roll info to history before it is updated with new roll info
  let newHistoryObj = {rollInfo.attackArmies, rollInfo.defendArmies, ...rollInfo.lastRoll};
  rollInfo.history.push(newHistoryObj);


  // Roll. This returns object of the following form:
  // {attackRolls: [2, 4], defendRolls: [3], attackResult: 0, defendResult: -1};
  let rollResults = roll(rollInfo.attackRollNum, rollInfo.defendRollNum);

  // update rollInfo with the results of the roll
  rollInfo.lastRoll = rollResults;
  rollInfo.attackArmies = rollInfo.attackArmies + rollResults.attackResult;
  rollInfo.defendArmies = rollInfo.defendArmies + rollResults.defendResult;


  // Here I need to take info from roll and 1) adjust obj with new values, 2) determine if stop criteria have been met, 3) determine if roll numbers need to be adjusted down, 4) update history. Then I can continue with the recursive part.

  // Function determines if rolling must stop. Either gives a string message explaining why rolling
  // must stop or returns false. MIGHT WANT TO CHANGE cannotContinue NAME?
  let mustStop = cannotContinue(rollInfo);

  if (mustStop) {
    // Rolling cannont continue. One side has won or a stop condition has been met.
    rollInfo.mesage = mustStop;
    // Might consider setting roll nums to 0, but only symbolic.
    return rollInfo;
  } else {

    // Determine new roll numbers based on results of the roll.
    rollInfo.attackNum = getAttackNum(newRollInfo.attackArmies, newRollInfo.attackNum);
    rollInfo.defendNum = getDefendNum(newRollInfo.defendArmies, newRollInfo.defendNum);

    // Roll again
    return rollTillStop(rollInfo);
  }
}



// If we cannot continue it returns the reason why as a string. Otherwise returns false. Note the in some cases the may be multiple reasons why we cannot continue but in such a case I only return the most useful reason.
cannotContinue = () => {

  // Has attack won?
  if (defendArmies === 0) {
    return "Attack has won.";
  };

  // Does attack have enough armies to continue?
  if (attackArmies === 1) {
    return "Attack only has 1 remaining army and cannot continue attacking.";
  };

  // Are we at stopNum?
  if (attackArmies === stopNum) {
    return "The stop number has been reached.";
  };

  // Are we at the stop differential
  if (attackArmies - defendArmies === stopDifferential) {
    return "The stop differential has been reached";
  };

  return false;

};



// NOT FINISHED, NOT SURE IF CORRECT need to add params
getAttackNum = (attackArmies, attackRollNum) => {

  let maxRollNums = [attackRollNum, (attackArmies - 1)];

  // Ensure that attackRollNum cannont put attack beyond stopNum
  if (stopNum) {
    maxRollNums.push(attackArmies - stopNum);
  }

  // Ensure that attackRollNum cannont put attack beyond stopDifferential
  if (stopDifferential) {
    let currentDifferential = attackArmies - defendArmies;
    maxRollNums.push(currentDifferential - stopDifferential);
  }

  return Math.min(...maxRollNums);
}

getDefendNum (defendArmies, defendRollNum) => {
  if (defendRollNum === 2 && defendArmies >= 2) {
    return 2;
  }
  return 1;
};






// Example of object when passed in to rollTillStop for the first time
{
  "attackArmies": 10,
  "defendArmies": 5,
  "attackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "lastRoll": {
    attackRolls: [],
    defendRolls: [],
    attackResult: 0,
    defendResult: 0
  },
  "message": "",
  "history": []
}

// suppose we roll and attack looses 2. The new object would look like this:
{
  "attackArmies": 8,
  "defendArmies": 5,
  "attackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "lastRoll": {"attackRolls": [2, 1, 1], "defendRolls": [6, 5], "attackResult": -2, "defendResult": 0},
  "message": ""
  "history": [
    {
      "attackArmies": 10,
      "defendArmies": 5,
      attackRolls: [],
      defendRolls: [],
      attackResult: 0,
      defendResult: 0
    }
  ]
}

// then if each loose one:

{
  "attackArmies": 7,
  "defendArmies": 4,
  "attackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "lastRoll": {"attackRolls": [6, 1, 1], "defendRolls": [5, 5], "attackResult": -1, "defendResult": -1},
  "message": ""
  "history": [
    {
      "attackArmies": 10,
      "defendArmies": 5,
      attackRolls: [],
      defendRolls: [],
      attackResult: 0,
      defendResult: 0
    },
    {
      "attackArmies": 8,
      "defendArmies": 5,
      attackRolls: [2, 1, 1],
      defendRolls: [6, 5],
      attackResult: -2,
      defendResult: 0
    }
  ]
}
