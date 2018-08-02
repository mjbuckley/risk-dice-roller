// Determine the defend roll number based on the current roll num and the game rules. Unlike the
// attack roll num, the defense num can never go up because it does not have a differential to worry
// about.
const getDefendRollNum = (defendArmies, defendRollNum) => {

  if (defendRollNum === 2 && defendArmies >= 2) {
    return 2;
  }
  return 1;
};

export default getDefendRollNum;
