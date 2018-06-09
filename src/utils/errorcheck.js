// Atacker starting armies: must be int >= 2
// Defender starting armies: must be int >=1

// Attacker dice rolled: int 1-3 & number must be < number of starting armies
// Defender dice rolled: int 1-2 and & number must be <= number of starting armies

// Battle: Higher number wins. If a tie, defender wins. If multiple dice, compare highest with highest.

// Roll options:
// 1) stop at x number of armies
// 2) stop when a certain ratio of attacker/defender armies reached
// 3) continue until end.

// activeRoll probably doesn't belong in Redux state but in function that is doing the rolling.
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
    // stuff to go here, might be an array instead of object.
  },
  "activeRoll": {
    "currentAttackArmies": 10,
    "currentDefendArmies": 5,
    "realAttackNum": 3,
    "realDefendNum": 2
  },
  "results" {
    "attack": 4,
    "defense": 0,
    "notes": ''
  }
}

const getErrorDescripion = {
  "attackArmies": ["attackArmies", "The number of attack armies must be a whole number greater than or equal to 2."],
  "defendArmies": ["defendArmies", "The number of defensive armies must be a whole number greater than or equal to 1."],
  "desiredAttackNum": ["desiredAttackNum", "Attack can only roll 1, 2 or 3 dice, and the number of dice rolled must be less than the number of attack armies."],
  "desiredDefendNum": ["desiredDefendNum", "Defense can only roll 1 or 2 dice, and the number of dice rolled must not exceed the number of defense armies."],
  "stopNum": ["stopNum", "Stop number must be a whole number that is less than the current number of attack armies and greater than 0."],
  "stopDifferential": ["stopDifferential", "The stop differential must be an integer, and it must be less than the current differential."]
};

// I'm not doing an error check for rolls being too great (say 3 rolls but 2 armies) because this will be automatically adjusted in the roll process. However, I should probably add a note saying how the roll number will automatically be adjusted down if needed to follow game rules and to satisfy stop criteria.

// perhaps return errors array no matter what. Then the length of that array can be check by the calling function to decide what to do.

// Also some sort of sanity check on armies to avoid super high numbers?



// NOTE June 5: parseInt returns integer of NaN. An empty string is NaN (but using Number it is converted to zero.) There are some gottchas for very large and small numbers but it should work for what I need. Also, I could use parseFloat, but might just be simpler to convert to an int then returning an error for a decimal. Also, be sure to specify a radix. Generally assumes 10, but a leading zero will make it assume 8.
validateForm = () => {

  // parsedRollInfo is a bit complex, but what it does is convert the rawRollInfo values in state into a new object that contains the same keys, but the values have either been converted from strings to integers if a valid input given, to NaN if a bogus value was given, or an empty string if belonging to the stopNum or stopDifferential keys (as those are optional fields and '' is valid there).
  // Example:
  // {
  //   "desiredAttackNum": "3",
  //   "desiredDefendNum": "sdjfsdj",
  //   "stopNum": ''
  // }
  //
  // becomes =>
  //
  // {
  //   "desiredAttackNum": 3,
  //   "desiredDefendNum": Nan,
  //   "stopNum": ''
  // }
  let parsedRollInfo = Object.assign({}, ...Object.keys(state.rawRollInfo).map(function(key) {

    let parsedValue = ((key === "stopNum" || key === "stopDifferential") && state.rawRollInfo[key] === '') ? '' : parseFloat(state.rawRollInfo[key]);

    return { [key]: parsedValue };
    }
  );


  let errors = [];

  // First round of error checks just makes sure all values are integers. Return if any of these errors are found. It doesn't make sense to do the second round of error checks if something fails here because that will likely return too many errors to be useful.
  Object.keys(parsedRollInfo).forEach(key) {
    if (isNaN(parsedRollInfo[key]) || !Number.isInt(parsedRollInfo[key])) {
      errors.push(getErrorDescripion[key]);
    }
  }


  if (errors.length > 0) {
    return errors;
  }





  // Second level error checking. At this point we know all fields that need to be filled in are filled in and contain an integer. Now need to verify that those numbers make sense/follow rules.
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



// At this point the calling function will get the error array returned to it. If it is empty than all is good and proceed with rolling. If it isn't empty, don't roll and change state to reflect errors so they can be displayed. Each entry in the error array is itself an array with an id and a description. The id can be used to target where to display the error, and the descriptio is the message to display.




functionCalledWhenButtonClicked = () => {

  let errors = validateForm();

  if (errors.length > 0) {
    // Somehow display them to user. Do not continue with roll. Maybe update an error property in state to have them be displayed?
    return errors;
  }

  // At this point we can proceed with the roll process becuase everything is valid.

};






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
