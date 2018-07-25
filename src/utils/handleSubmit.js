import convertSubmission from './convertSubmission.js';
import validateSubmission from './validateSubmission.js';
import rollTillStop from './rollTillStop.js';
import { updateErrors, updateResults } from '../actions';

/**
 * handleSubmit() takes the dice rolling info submitted by the user and either returns any errors
 * in the the form submission to the user or handles all of the rolling and returns the results.
 * It takes an object as it argument that corresponds to the userRollInfo property of the Redux state.
 */
const handleSubmit = (userRollInfo) => {

  // convert user submission to useable form
  let rollInfo = convertSubmission(userRollInfo);

  // Check for errors in submission. Returns an array containing the errors, or an empty array if.
  // there are none.
  let errors = validateSubmission(rollInfo);

  // If there are errors we need to abort and return errors to the user
  if (errors.length > 0) {
    return updateErrors(errors);
  }

  /** At this point we know the submission is valid and can proceed. The rolling process is handled
   * by the rollTillStop function. It takes an object with the same properties as rollInfo but with
   * the addtion of a last roll array, a history array, and a message string. Add those here, then
   * call rollTillStop().
   */
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

  // return updateResults({"status": "success", ...result});
  return updateResults(result);
};

export default handleSubmit;
