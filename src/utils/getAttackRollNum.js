// Function finds the attack roll number based on number of current armies, the orignal desired roll
// number, game rules, and stop conditions.
const getAttackRollNum = (attackArmies, orignalAttackRollNum, defendArmies, stopNum, stopDifferential) => {

  // Array contains desired roll num and max according to rules.
  let maxRollNums = [orignalAttackRollNum, (attackArmies - 1)];

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
