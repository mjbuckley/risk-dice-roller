// SAMPLE REDUX STATE
{
  rawRollInfo: {
    "attackArmies": 10,
    "defendArmies": 5,
    "desiredAttackNum": 3,
    "desiredDefendNum": 2,
    "stopNum": '',
    "stopDifferential": ''
  },
  "errorMessages": {
    "attackArmies": '',
    "defendArmies": '',
    "desiredAttackNum": '',
    "desiredDefendNum": '',
    "stopNum": '',
    "stopDifferential": ''
  },
  "results" {
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
  "desiredAttackNum": ["desiredAttackNum", "Attack can only roll 1, 2 or 3 dice, and the number of dice rolled must be less than the number of attack armies."],
  "desiredDefendNum": ["desiredDefendNum", "Defense can only roll 1 or 2 dice, and the number of dice rolled must not exceed the number of defense armies."],
  "stopNum": ["stopNum", "Stop number must be a whole number that is less than the current number of attack armies and greater than 0."],
  "stopDifferential": ["stopDifferential", "The stop differential must be an integer, and it must be less than the current differential."]
};




// Function makes sure that all form values are valid and follow game rules. Returns an array. If empty, then there were no errors. If not empty, the array will contain an array for each error found. Each array will contain the name of the form/state value where the error occured and a message about the error. This should be returned to the user.
validateForm = () => {

  // parsedRollInfo is a bit complex, but what it does is convert the rawRollInfo values in state into a new object that contains the same keys, but the values have either been converted from strings to integers if a valid input given, to NaN if a bogus value was given, or an empty string if belonging to the stopNum or stopDifferential keys (as those are optional fields and '' is valid there). Example: {"desiredAttackNum": "3", "desiredDefendNum": "sdjfsdj", "stopNum": ''} becomes => {"desiredAttackNum": 3, "desiredDefendNum": Nan, "stopNum": ''}.
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

  if (parsedRollInfo["desiredAttackNum"] > parsedRollInfo["attackArmies"] - 1 ||
      parsedRollInfo["desiredAttackNum"] > 3 ||
      parsedRollInfo["desiredAttackNum"] < 1) {
        errors.push(getErrorDescripion["desiredAttackNum"]);
  };

  if (parsedRollInfo["desiredDefendNum"] > parsedRollInfo["defendArmies"] ||
      parsedRollInfo["desiredDefendNum"] < 1 ||
      parsedRollInfo["desiredDefendNum"] > 2) {
        errors.push(getErrorDescripion["desiredDefendNum"]);
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
    // Somehow display them to user. Do not continue with roll. Maybe update an error property in state to have them be displayed?
    return errors;
  }

  // At this point we can proceed with the roll process becuase everything is valid.
  // roll function here
};



// I'm thinking a recursive function like below. Would be called with the validated values from state. Each roll round will return an update object in the same form as the state (but not changing state itself). The can continue function takes that object and determines whether roll can continue. If can't continue decide how to communicate that message and display.


pseudoRollFunc() {
  let result = roll();
  if (canContinue(result)) {
    return pseudoRollFunc(result);
  } else {
    return result;
  }
}
// Perhaps roll() can return an array with something like [true/false, {}, message(optional)];



roll () => {
  return Math.floor(Math.random() * 7;
};

playARound () => {
  let attackRolls = [];
  let defendRolls = [];

  for (let i = 1; i <=realAttackNum; i++) {
    attackRolls.push[roll()];
  }

  for (let i = 1; i <=realDefendNum; i++) {
    defendRolls.push[roll()];
  }

  if (defendRolls === 1) {
    return (Math.max(...attackRolls) > defendRolls) ? "attack wins" : "defend wins";
  } else {

  }
};


// Is game over?
hasSomeoneWon () => {
  if (defendArmies === 0) {
    return true;
  };

  if ()
};


atStopNum () => {
  if (attackArmies === stopNum) {
    return true;
  };
  return false;
};

atStopDifferential () => {
  if (attackArmies - defendArmies === stopDifferential) {
    return true;
  };
  return false;
};

// NOT FINISHED, NOT SURE IF CORRECT
getAttackNum = () => {
  let max = (attackArmies > desiredAttackNum) ? desiredAttackNum : attackArmies - 1;

  if (stopNum && (attackArmies - max < stopNum)) {

  }
}

getDefendNum () => {
  if (desiredDefendNum === 2 && defendArmies >= 2) {
    return 2;
  }
  return 1;
};
