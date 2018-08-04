import getAttackRollNum from './getAttackRollNum';

it('adjusts for stopNum', () => {
  expect(getAttackRollNum(10, 3, 10, 9, '')).toEqual(1);
});

it('adjusts for stopDifferential', () => {
  expect(getAttackRollNum(10, 3, 10, '', -1)).toEqual(1);
});

it('adjusts for game rules', () => {
  expect(getAttackRollNum(2, 3, 10, '', '')).toEqual(1);
});

it('maintains roll number when it shuld', () => {
  expect(getAttackRollNum(10, 3, 10, '', '')).toEqual(3);
});
