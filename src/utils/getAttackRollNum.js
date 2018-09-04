// Function finds the attack roll number based on number of current armies, the orignal desired roll
// number, game rules, and stop conditions.
const getAttackRollNum = (attackArmies, orignalAttackRollNum, defendArmies, stopNum, stopDifferential) => {

  // Array contains desired roll num and max according to rules.
  let maxRollNums = [orignalAttackRollNum, (attackArmies - 1)];

  // Add to array the max roll num that can't result it going below stop stopNum
  if (stopNum) {
    maxRollNums.push(attackArmies - stopNum);
  }

  /**
   * Add to array the max roll num that can't result in going below stop differential. Note that I
   * cannot just check if (stopDifferential) because 0 is a valid stopDifferential and that value
   * would incorrectly lead the conditional to being false. I don't need to do this with stopNum
   * above because there 0 is not valid and would have returned an error and not proceeded with the
   * roll.
   */
  if (stopDifferential !== '') {
    let currentDifferential = attackArmies - defendArmies;
    maxRollNums.push(currentDifferential - stopDifferential);
  }

  // Return the lowest roll number (will satisfy all conditions).
  return Math.min(...maxRollNums);
}

export default getAttackRollNum;
