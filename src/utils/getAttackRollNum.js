// Function finds the attack roll number based on current roll number, game rules, and stop conditions.
getAttackRollNum = (attackArmies, attackRollNum) => {

  // Array contains current roll num and max according to rules.
  let maxRollNums = [attackRollNum, (attackArmies - 1)];

  // Add to array the max roll num that can't result it going below stop stopNum
  if (stopNum) {
    maxRollNums.push(attackArmies - stopNum);
  }

  // Add to array the max roll num that can't result in going below stop differential.
  if (stopDifferential) {
    let currentDifferential = attackArmies - defendArmies;
    maxRollNums.push(currentDifferential - stopDifferential);
  }

  // Return the lowest roll number (will satisfy all conditions).
  return Math.min(...maxRollNums);
}

export default getAttackRollNum;
