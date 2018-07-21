// validateSubmission() takes the parsed user info and validates it. It makes sure that all form values are consitent with game rules. There are two rounds of error checking. Although all errors could be checked at once, the errors in the first round would likely trigger most of the errors in the second round, and this would be too many errors to be useful. The first round errors are more basic and need to be attended to before continuing with the second round. The function returns an array. If empty, then there were no errors. If not empty, the array will contain an array for each error found. Each array will contain the name of the form/state value where the error occured and a message about the error. This should be returned to the user.
validateSubmission = (parsedRollInfo) => {

  // Maps form/state id to error description for that item (maybe move to own file?).
  const getErrorDescripion = {
    "attackArmies": ["attackArmies", "The number of attack armies must be a whole number greater than or equal to 2."],
    "defendArmies": ["defendArmies", "The number of defensive armies must be a whole number greater than or equal to 1."],
    "attackRollNum": ["attackRollNum", "Attack can only roll 1, 2 or 3 dice, and the number of dice rolled must be less than the number of attack armies."],
    "defendRollNum": ["defendRollNum", "Defense can only roll 1 or 2 dice, and the number of dice rolled must not exceed the number of defense armies."],
    "stopNum": ["stopNum", "Stop number must be a whole number that is less than the current number of attack armies and greater than 0."],
    "stopDifferential": ["stopDifferential", "The stop differential must be an integer, and it must be less than the current differential."]
  };

  let errors = [];

  // First round of error checks just makes sure all values are integers or empty strings (where allowed).
  Object.keys(parsedRollInfo).forEach(key) {
    if (parsedRollInfo[key] !== '' &&
    (isNaN(parsedRollInfo[key]) || !Number.isInteger(parsedRollInfo[key]))) {
      errors.push(getErrorDescripion[key]);
    }
  }

  // Return if any of these errors are found. It doesn't make sense to do the second round of error checks if something fails here because that will likely return too many errors to be useful.
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
