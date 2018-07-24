/**
 * This function test whether rolling can continue based on the current attack and defense army
 * numbers, the game rules, and the stop criteria. Returns false if we don't need to stop, returns
 * a string message with an explination if we do need to stop.
 */
const needToStop = (rollInfo) => {

  // Has attack won?
  if (rollInfo.defendArmies === 0) {
    return "Attack has won.";
  };

  // Does attack have enough armies to continue?
  if (rollInfo.attackArmies === 1) {
    return "Attack only has 1 remaining army and cannot continue attacking.";
  };

  // Are we at stopNum?
  if (rollInfo.attackArmies === rollInfo.stopNum) {
    return "The stop number has been reached.";
  };

  // Are we at the stop differential
  if (rollInfo.attackArmies - rollInfo.defendArmies === rollInfo.stopDifferential) {
    return "The stop differential has been reached";
  };

  return false;
};

export default needToStop;
