// Determine the defend roll number based on the current roll num and the game rules.
getDefendRollNum (defendArmies, defendRollNum) => {

  if (defendRollNum === 2 && defendArmies >= 2) {
    return 2;
  }
  return 1;
};

export default getDefendRollNum;
