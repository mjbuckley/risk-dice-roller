import convertSubmission from './convertSubmission.js';
import validateSubmission from './validateSubmission.js';
import rollTillStop from './rollTillStop.js';

functionCalledWhenButtonClicked = () => {

  // convert user submission to useable form
  let rollInfo = convertSubmission(state.userRollInfo);

  // Check for errors in submission. Returns an array containing the errors, otherwise an empty array.
  let errors = validateSubmission(rollInfo);

  // If there are errors we need to abort and return errors to the user
  if (errors.length > 0) {
    // Somehow add the errors in the array to the Redux state. Trigger and update.
  }

  // At this point we know the submission is valid and can proceed. The rolling process is handled
  // by the rollTillStop function. It takes an object with the same values as userRollInfo but with
  // the addtion of a last roll array, a history array, and a message string. Add those here, then
  // call rollTillStop(). NOTE THAT I CAN PROBABLY DO LESS FOR LASTROLL, BUT LEAVING FOR NOW.
  rollInfo.lastRoll = {
    attackRolls: [],
    defendRolls: [],
    attackResult: 0,
    defendResult: 0
  };
  rollInfo.history = [];
  rollInfo.message = "";

  // This returns a message and roll history.
  let result = rollTillStop(rollInfo);

  // HERE IS NEED TO UPDATE STATE SOMEHOW WITH MESSAGE AND HISTORY.
};
