import roll from './roll.js';


// All possible roll combinations
let a1d1 = roll(1, 1);
let a1d2 = roll(1, 2);
let a2d1 = roll(2, 1);
let a2d2 = roll(2, 2);
let a3d1 = roll(3, 1);
let a3d2 = roll(3, 2);


it('rolls the correct number of dice', () => {

  expect(a1d1.attackRolls.length).toEqual(1);
  expect(a1d1.defendRolls.length).toEqual(1);

  expect(a1d2.attackRolls.length).toEqual(1);
  expect(a1d2.defendRolls.length).toEqual(2);

  expect(a2d1.attackRolls.length).toEqual(2);
  expect(a2d1.defendRolls.length).toEqual(1);

  expect(a2d2.attackRolls.length).toEqual(2);
  expect(a2d2.defendRolls.length).toEqual(2);

  expect(a3d1.attackRolls.length).toEqual(3);
  expect(a3d1.defendRolls.length).toEqual(1);

  expect(a3d2.attackRolls.length).toEqual(3);
  expect(a3d2.defendRolls.length).toEqual(2);
});


// Imperfect test as it the attack/defend results are dependent on random rolls, but good enough
// for now and very likely to catch any errors.
it('returns a possible attack/defend result', () => {

  expect(a1d1.attackResult).toBeLessThanOrEqual(0);
  expect(a1d1.attackResult).toBeGreaterThanOrEqual(-1);
  expect(a1d1.defendResult).toBeLessThanOrEqual(0);
  expect(a1d1.defendResult).toBeGreaterThanOrEqual(-1);

  expect(a1d2.attackResult).toBeLessThanOrEqual(0);
  expect(a1d2.attackResult).toBeGreaterThanOrEqual(-1);
  expect(a1d2.defendResult).toBeLessThanOrEqual(0);
  expect(a1d2.defendResult).toBeGreaterThanOrEqual(-2);

  expect(a2d1.attackResult).toBeLessThanOrEqual(0);
  expect(a2d1.attackResult).toBeGreaterThanOrEqual(-2);
  expect(a2d1.defendResult).toBeLessThanOrEqual(0);
  expect(a2d1.defendResult).toBeGreaterThanOrEqual(-1);

  expect(a2d2.attackResult).toBeLessThanOrEqual(0);
  expect(a2d2.attackResult).toBeGreaterThanOrEqual(-2);
  expect(a2d2.defendResult).toBeLessThanOrEqual(0);
  expect(a2d2.defendResult).toBeGreaterThanOrEqual(-2);

  expect(a3d1.attackResult).toBeLessThanOrEqual(0);
  expect(a3d1.attackResult).toBeGreaterThanOrEqual(-3);
  expect(a3d1.defendResult).toBeLessThanOrEqual(0);
  expect(a3d1.defendResult).toBeGreaterThanOrEqual(-1);

  expect(a3d2.attackResult).toBeLessThanOrEqual(0);
  expect(a3d2.attackResult).toBeGreaterThanOrEqual(-3);
  expect(a3d2.defendResult).toBeLessThanOrEqual(0);
  expect(a3d2.defendResult).toBeGreaterThanOrEqual(-2);
});
