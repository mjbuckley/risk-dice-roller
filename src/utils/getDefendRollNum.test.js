import getDefendRollNum from './getDefendRollNum';

it('lowers roll number to follow game rules', () => {
  expect(getDefendRollNum(1,2)).toEqual(1);
});

it('keeps roll number when it should', () => {
  expect(getDefendRollNum(10, 2)).toEqual(2);
});
