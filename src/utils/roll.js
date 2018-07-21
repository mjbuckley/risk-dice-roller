// Function handles one round of rolling (1-3 dice for attack, 1-2 dice for defense), not the entire rolling sequence. Returns an object with the roll resuls and the resulting differentials for attack/defend.
roll (attackNum, defendNum) => {
  let attackRolls = [];
  let defendRolls = [];
  let attackResult = 0;
  let defendResult = 0;

  // Roll for attack and sort high-low
  for (let i = 1; i <= attackNum; i++) {
    attackRolls.push[Math.floor(Math.random() * 7)];
  }
  attackRolls.sort((a, b) => a - b); // function ensures sorts by number and not string value

  // Roll for defense and sort high-low
  for (let i = 1; i <= defendNum; i++) {
    defendRolls.push[Math.floor(Math.random() * 7)];
  }
  defendRolls.sort((a, b) => a - b);

  // Compare highest attack to highest defense (defense wins on a tie)
  (defendRolls[defendRolls.length - 1] >= attackRolls[attackRolls.length - 1]) ? attackResult-- : defendResult--;

  // If there is a secondary dice comparison needed, this does it.
  if (attackNum >= 2 and defendNum === 2) {
    (defendRolls[defendRolls.length - 2] >= attackRolls[attackRolls.length - 2]) ? attackResult-- : defendResult--;
  }

  return {attackRolls, defendRolls, attackResult, defendResult};
};
