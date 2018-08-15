import handleSubmit from './handleSubmit.js';

const goodValues = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': '',
  'stopDifferential': ''
};

it('good values without a stopNum/Dif returns a result', () => {
  expect(handleSubmit(goodValues).type).toBe('UPDATE_RESULTS');
});


const goodStopNum = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': 5,
  'stopDifferential': ''
};

it('good values with a stopNum returns a result', () => {
  expect(handleSubmit(goodStopNum).type).toBe('UPDATE_RESULTS');
});


const goodStopDiff = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': '',
  'stopDifferential': -2
};

it('good values with a stopDiff returns a result', () => {
  expect(handleSubmit(goodStopDiff).type).toBe('UPDATE_RESULTS');
});


const goodStopNumAndDiff = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': 5,
  'stopDifferential': -2
};

it('good values with a stopNum and stopDifferential a result', () => {
  expect(handleSubmit(goodStopNumAndDiff).type).toBe('UPDATE_RESULTS');
});


const badStopDiff = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': '',
  'stopDifferential': 3
};

it('good values but with a bad stopDifferential returns an error', () => {
  expect(handleSubmit(badStopDiff).type).toBe('UPDATE_ERRORS');
});


const badStopNum = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': 11,
  'stopDifferential': ''
};

it('good values but with a bad stopNum returns an error', () => {
  expect(handleSubmit(badStopNum).type).toBe('UPDATE_ERRORS');
});


const badStopNumAndDiff = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 3,
  'defendRollNum': 2,
  'stopNum': 11,
  'stopDifferential': 3
};

it('good values but with a bad stopDifferential and bad stopNum returns an error', () => {
  expect(handleSubmit(badStopNumAndDiff).type).toBe('UPDATE_ERRORS');
});


const badValues = {
  'attackArmies': 10,
  'defendArmies': 8,
  'attackRollNum': 5,
  'defendRollNum': 2,
  'stopNum': '',
  'stopDifferential': ''
}

it('bad roll values returns an error', () => {
  expect(handleSubmit(badValues).type).toBe('UPDATE_ERRORS');
});
