/**
 * This function handles one round of rolling, with 1-3 dice being rolled for attack, and 1-2 dice
 * being rolled for defense. It does not handle the entire multi-round rolling sequence (for that,
 * see rollTillStop(), which calls this function). Returns an object with the roll resuls (sorted
 * low-high, and the  relative results for attack/defend. Ex:
 * {"attackRolls": [1, 2], "defendRolls": [3], "attackResult": -1, "defendResult": 0}
 */
const roll = (attackRollNum, defendRollNum) => {
  let attackRolls = [];
  let defendRolls = [];
  let attackResult = 0;
  let defendResult = 0;

  // Roll for attack and sort low-high
  for (let i = 1; i <= attackRollNum; i++) {
    attackRolls.push(Math.floor(Math.random() * 6 + 1));
  }
  attackRolls.sort((a, b) => a - b); // function ensures sorts by number and not string value

  // Roll for defense and sort low-high
  for (let i = 1; i <= defendRollNum; i++) {
    defendRolls.push(Math.floor(Math.random() * 6 + 1));
  }
  defendRolls.sort((a, b) => a - b);

  // Compare highest attack to highest defense (defense wins on a tie)
  (defendRolls[defendRolls.length - 1] >= attackRolls[attackRolls.length - 1]) ? attackResult-- : defendResult--;

  // If there is a secondary dice comparison needed, this does it.
  if (attackRollNum >= 2 && defendRollNum === 2) {
    (defendRolls[defendRolls.length - 2] >= attackRolls[attackRolls.length - 2]) ? attackResult-- : defendResult--;
  }

  return {attackRolls, defendRolls, attackResult, defendResult};
};

export default roll;
