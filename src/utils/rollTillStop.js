import roll from './roll.js';
import needToStop from './needToStop.js';
import getAttackRollNum from './getAttackRollNum.js';
import getDefendRollNum from './getDefendRollNum.js';

/**
 * rollTillStop() handles the entire rolling sequence. It continuously rolls individual rounds until
 * the game rules or stop conditions require a stop. As the rolling progresses it will automatically
 * adjust the number of dice rolled in order to follow game rules and to avoid going beyond the
 * stop conditions. When the rolling must stop, the function returns and object with the complete
 * roll history as well as a message explaining whey the rolling stopped. Ex:
 * { "message": "Attack only has 1 remaining army and cannot continue attacking.",
 *    "history": [
 *      {"attackArmies": 3, "defendArmies": 2, attackRolls: [], defendRolls: [], attackResult: 0, defendResult: 0},
 *      {"attackArmies": 2, "defendArmies": 1, attackRolls: [2, 1], defendRolls: [1, 1], attackResult: -1, defendResult: -1},
 *      {"attackArmies": 1, "defendArmies": 1, attackRolls: [3], defendRolls: [4], attackResult: -1, defendResult: 0}
 *    ]
 * }
 * For each history object the attack/defend rolls are the rolls that brought about the
 * attack/defend army values in the same obkect. This is why the rolls are blank for the first object
 * (it is the starting value, no roll brought it about).
 * As its argument the function takes an object that contains all of the same properties as
 * state.userRollInfo with the addtion of three additional properties:
 * 1) "lastRoll": {attackRolls: [], defendRolls: [], attackResult: 0, defendResult: 0}
 * 2) "history": []
 * 3) "message": ""
 */
const rollTillStop = (rollInfo) => {

  // Add current status info to history before it is updated with new roll info
  let newHistoryObj = {
    'attackArmies':rollInfo.attackArmies,
    'defendArmies': rollInfo.defendArmies,
    ...rollInfo.lastRoll
  };
  rollInfo.history.push(newHistoryObj);


  // Roll. This returns object of the following form:
  // {attackRolls: [2, 4], defendRolls: [3], attackResult: 0, defendResult: -1};
  let rollResults = roll(rollInfo.attackRollNum, rollInfo.defendRollNum);

  // update rollInfo with the results of the roll
  rollInfo.lastRoll = rollResults;
  rollInfo.attackArmies = rollInfo.attackArmies + rollResults.attackResult;
  rollInfo.defendArmies = rollInfo.defendArmies + rollResults.defendResult;


  // Determine if rolling can continue. needToStop() returns a string message explaining why rolling
  // must stop or false if we don't need to stop.
  let mustStop = needToStop(rollInfo);

  if (mustStop) {

    // NEW, add roll results to history (normally done at start of function, but doing here since we are retruning now).
    let latestHistory = {
      'attackArmies':rollInfo.attackArmies,
      'defendArmies': rollInfo.defendArmies,
      ...rollInfo.lastRoll
    };
    
    rollInfo.history.push(latestHistory);


    rollInfo.message = mustStop;
    return {'message': rollInfo.message, 'history': rollInfo.history};
  } else {

    // Update attack and defend roll nums (might need to be adjusted down based on new army numbers).
    rollInfo.attackRollNum = getAttackRollNum(rollInfo.attackArmies, rollInfo.attackRollNum, rollInfo.defendArmies, rollInfo.stopNum, rollInfo.stopDifferential);
    rollInfo.defendRollNum = getDefendRollNum(rollInfo.defendArmies, rollInfo.defendRollNum);

    // Roll again
    return rollTillStop(rollInfo);
  }
}

export default rollTillStop;
