// SAMPLE REDUX STATE
{
  rawRollInfo: {
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


// Maps form/state id to error description for that item
const getErrorDescripion = {
  "attackArmies": ["attackArmies", "The number of attack armies must be a whole number greater than or equal to 2."],
  "defendArmies": ["defendArmies", "The number of defensive armies must be a whole number greater than or equal to 1."],
  "attackRollNum": ["attackRollNum", "Attack can only roll 1, 2 or 3 dice, and the number of dice rolled must be less than the number of attack armies."],
  "defendRollNum": ["defendRollNum", "Defense can only roll 1 or 2 dice, and the number of dice rolled must not exceed the number of defense armies."],
  "stopNum": ["stopNum", "Stop number must be a whole number that is less than the current number of attack armies and greater than 0."],
  "stopDifferential": ["stopDifferential", "The stop differential must be an integer, and it must be less than the current differential."]
};



// Function makes sure that all form values are valid and follow game rules. Returns an array. If empty, then there were no errors. If not empty, the array will contain an array for each error found. Each array will contain the name of the form/state value where the error occured and a message about the error. This should be returned to the user.
validateForm = () => {

  // parsedRollInfo is a bit complex, but what it does is convert the rawRollInfo values in state into a new object that contains the same keys, but the values have either been converted from strings to integers if a valid input given, to NaN if a bogus value was given, or an empty string if belonging to the stopNum or stopDifferential keys (as those are optional fields and '' is valid there). Example: {"attackRollNum": "3", "defendRollNum": "sdjfsdj", "stopNum": ''} becomes => {"attackRollNum": 3, "defendRollNum": Nan, "stopNum": ''}.
  let parsedRollInfo = Object.assign({}, ...Object.keys(state.rawRollInfo).map(function(key) {

    let parsedValue = ((key === "stopNum" || key === "stopDifferential") && state.rawRollInfo[key] === '') ? '' : parseFloat(state.rawRollInfo[key]);

    return { [key]: parsedValue };
    }
  );


  let errors = [];

  // First round of error checks just makes sure all values are integers or empty strings (where allowed). Return if any of these errors are found. It doesn't make sense to do the second round of error checks if something fails here because that will likely return too many errors to be useful.
  Object.keys(parsedRollInfo).forEach(key) {
    if (parsedRollInfo[key] !== '' &&
    (isNaN(parsedRollInfo[key]) || !Number.isInteger(parsedRollInfo[key]))) {
      errors.push(getErrorDescripion[key]);
    }
  }


  if (errors.length > 0) {
    return errors;
  }


  // Second level error checking. At this point we know all fields that need to be filled in are filled in and contain an integer or empty string (where allowed). Now need to verify that those numbers make sense/follow rules.
  if (parsedRollInfo["attackArmies"] < 2) {
    errors.push(getErrorDescripion["attackArmies"]);
  };

  if (parsedRollInfo["defendArmies"] < 1) {
    errors.push(getErrorDescripion["defendArmies"]);
  };

  if (parsedRollInfo["attackRollNum"] > parsedRollInfo["attackArmies"] - 1 ||
      parsedRollInfo["attackRollNum"] > 3 ||
      parsedRollInfo["attackRollNum"] < 1) {
        errors.push(getErrorDescripion["attackRollNum"]);
  };

  if (parsedRollInfo["defendRollNum"] > parsedRollInfo["defendArmies"] ||
      parsedRollInfo["defendRollNum"] < 1 ||
      parsedRollInfo["defendRollNum"] > 2) {
        errors.push(getErrorDescripion["defendRollNum"]);
  };

  if (parsedRollInfo["stopNum"] && (parsedRollInfo["stopNum"] < 1 || parsedRollInfo["stopNum"] >= parsedRollInfo["attackArmies"]) {
    errors.push(getErrorDescripion["stopNum"]);
  };

  let currentDiff = parsedRollInfo["attackArmies"] - parsedRollInfo["defendArmies"];
  if (parsedRollInfo["stopDifferential"] >= currentDiff) {
    errors.push(getErrorDescripion["stopDifferential"]);
  };

  return errors;
};





functionCalledWhenButtonClicked = () => {

  let errors = validateForm();

  if (errors.length > 0) {
    // Don't proceed with roll. Add the errors in the array to the Redux state.
  }

  // At this point we can proceed with the roll process becuase everything is valid.
  // roll function here
};


// Idea for keeping track of history
// initial situation (num armies for each)
// results after first roll (roll results, num armies for each)
// results after second (roll results, num armies for each)
// final result (roll results, num armies for each, reason for stop?


// I'm thinking a recursive function like below. Would be called with the validated values from state. Each roll round will return an update object in the same form as the state (but not changing state itself). The can continue function takes that object and determines whether roll can continue. If can't continue decide how to communicate that message and display.


rollTillStop = (obj) => {
  let result = roll();



  // Here I need to take info from roll and 1) adjust obj with new values, 2) determine if stop criteria have been met, 3) determine if roll numbers need to be adjusted down, 4) update history. Then I can continue with the recursive part.

  if (cannotContinue(newObj)) {
    // The value returned is a string explaining why not. Handle as needed.
  } else {
    return rollTillStop(newObj);
  }
}
// Perhaps roll() can return an array with something like [true/false, {}, message(optional)];


// Returns an object with the roll numbers and differentials for attack/defend
roll (attackNum, defendNum) => {
  let attackRolls = [];
  let defendRolls = [];
  let attackResult = 0;
  let defendResult = 0;

  for (let i = 1; i <= attackNum; i++) {
    attackRolls.push[Math.floor(Math.random() * 7)];
  }
  attackRolls.sort((a, b) => a - b); // function ensures sorts by number and not string value

  for (let i = 1; i <= defendNum; i++) {
    defendRolls.push[Math.floor(Math.random() * 7)];
  }
  defendRolls.sort((a, b) => a - b);

  // AT THIS POINT WE HAVE TWO ARRAYS WITH THEIR ROLLS SORTED IN ASCENDING ORDER

  // Compare highest to highest
  (defendRolls[defendRolls.length - 1] >= attackRolls[attackRolls.length - 1]) ? attackResult-- : defendResult--;

  // If there is a secondary dice comparison, do it
  if (attackNum >= 2 and defendNum === 2) {
    (defendRolls[defendRolls.length - 2] >= attackRolls[attackRolls.length - 2]) ? attackResult-- : defendResult--;
  }

  return {attackRolls, defendRolls, attackResult, defendResult};
};


// let newAttackValue = obj.attackArmies + attackResult;
// let newDefendValue = obj.defendArmies + defendResult;
//
// // returns object equal to passed in object but with updated attack/defend armies based on roll result.
// return Object.assign({}, obj, {"attackArmies": newAttackValue, "defendArmies": newDefendValue});



// Sample object form for rolling info:
rollResults: {
  "attackArmies": 10,
  "defendArmies": 5,
  "AttackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "history": []
},


// Is game over?
// attackHasWon = () => {
//   if (defendArmies === 0) {
//     return true;
//   };
//
//   return false;
// };
//
// notEnoughToAttack = () => {
//   if (attackArmies === 1) {
//     return true;
//   }
//
//   return false;
// }
//
//
// atStopNum () => {
//   if (attackArmies === stopNum) {
//     return true;
//   };
//   return false;
// };
//
// atStopDifferential () => {
//   if (attackArmies - defendArmies === stopDifferential) {
//     return true;
//   };
//   return false;
// };

// If we cannot continue it returns the reason why as a string. Otherwise returns false. Note the in some cases the may be multiple reasons why we cannot continue but in such a case I only return the most useful reason.
cannotContinue = () => {

  // Has attack won?
  if (defendArmies === 0) {
    return "Attack has won.";
  };

  // Does attack have enough armie to continue?
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



// NOT FINISHED, NOT SURE IF CORRECT
getAttackNum = () => {
  let max = (attackArmies > attackRollNum) ? attackRollNum : attackArmies - 1;

  if (stopNum && (attackArmies - max < stopNum)) {

  }
}

getDefendNum () => {
  if (defendRollNum === 2 && defendArmies >= 2) {
    return 2;
  }
  return 1;
};
