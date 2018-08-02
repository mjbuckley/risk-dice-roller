/**
 * validateSubmission() takes the converted user submission and validates it. There are two rounds
 * of error checking. The first round checks for basic errors like non-numbers or non-integers. The
 * second round makes sure values are consistant with game rules. Although all errors could be checked at
 * once, the errors in the first round would likely cause most of the errors in the second round to
 * be triggered, and this would be too many errors to be useful, so if any first round errors are
 * found they are returned right away. The function returns an array. If empty, then there were no
 * errors. If not empty, the array will contain an array for each error found. Each sub array contains
 * the name of the value where the error occured, and a message about the error. See getErrorDescripion
 * below for an example.
 */
const validateSubmission = (rollInfo) => {

  // Object containing descriptions for the possible errors.
  const getErrorDescripion = {
    "attackArmies": ["attackArmies", "The number of attacking armies must be a whole number greater than or equal to 2."],
    "defendArmies": ["defendArmies", "The number of defending armies must be a whole number greater than or equal to 1."],
    "attackRollNum": ["attackRollNum", "Attack can only roll 1, 2 or 3 dice, and the number of dice rolled must be less than the number of attack armies."],
    "defendRollNum": ["defendRollNum", "Defense can only roll 1 or 2 dice, and the number of dice rolled must not exceed the number of defense armies."],
    "stopNum": ["stopNum", "A stop number is optional, but if used it must be a whole number that is less than the current number of attack armies and greater than 0."],
    "stopDifferential": ["stopDifferential", "A stop differential is optional, but if used it must be an integer, and it must be less than the current differential."]
  };

  let errors = [];

  // 1ST ROUND OF ERROR CHECKS. Make sure all values are integers or empty strings. Note that
  // convertSubmission() has already ensured that empty strings only exist in allowable places.
  Object.keys(rollInfo).forEach((key) => {
    if (rollInfo[key] !== '' &&
    (isNaN(rollInfo[key]) || !Number.isInteger(rollInfo[key]))) {
      errors.push(getErrorDescripion[key]);
    }
  });

  // Return if any errors are found. Otherise continue with 2nd round.
  if (errors.length > 0) {
    return errors;
  }


  // 2ND ROUND OF ERROR CHECKS. We now know that all fields contain an integer or empty string
  // (where allowed). Now verify that those numbers make sense/follow game rules.


  // Need at least 2 armies to attack
  if (rollInfo["attackArmies"] < 2) {
    errors.push(getErrorDescripion["attackArmies"]);
  };

  // Having less than 1 defending army is nonsensical
  if (rollInfo["defendArmies"] < 1) {
    errors.push(getErrorDescripion["defendArmies"]);
  };

  // Attack must have at least 1 more army than it attacks with, and it can only attack with 1 to 3.
  if (rollInfo["attackRollNum"] > rollInfo["attackArmies"] - 1 ||
      rollInfo["attackRollNum"] > 3 ||
      rollInfo["attackRollNum"] < 1) {
        errors.push(getErrorDescripion["attackRollNum"]);
  };

  // Defense cannot defend with more than the number of armies it has, and it can only defend with 1 to 2.
  if (rollInfo["defendRollNum"] > rollInfo["defendArmies"] ||
      rollInfo["defendRollNum"] < 1 ||
      rollInfo["defendRollNum"] > 2) {
        errors.push(getErrorDescripion["defendRollNum"]);
  };

  // If used, stopNum must be 1 or greater and less than the current number of attack armies.
  if (rollInfo["stopNum"] && (rollInfo["stopNum"] < 1 || rollInfo["stopNum"] >= rollInfo["attackArmies"])) {
    errors.push(getErrorDescripion["stopNum"]);
  };

  // If used, stopDifferential must be less than the current differential.
  let currentDiff = rollInfo["attackArmies"] - rollInfo["defendArmies"];
  if (rollInfo["stopDifferential"] >= currentDiff) {
    errors.push(getErrorDescripion["stopDifferential"]);
  };

  return errors;
};

export default validateSubmission;
