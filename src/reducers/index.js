import { combineReducers } from 'redux';

const defaultUserRollInfo = {
  'attackArmies': '',
  'defendArmies': '',
  'attackRollNum': '',
  'defendRollNum': '',
  'stopNum': '',
  'stopDifferential': ''
};

function userRollInfo(state = defaultUserRollInfo, action) {
  switch (action.type) {
    case 'UPDATE_USER_ROLL_INFO':
      return {...state, ...action.rollInfo};
    case 'RESET_FORM':
      return defaultUserRollInfo;
    default:
      return state;
  }
}

const defaultResults = {
  "clickCount": 0,
  "status": 'none',
  "rollResults": {},
  "errors": []
};

function results(state = defaultResults, action) {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {
        'clickCount': state.clickCount + 1,
        'status': 'results',
        'rollResults': action.results,
        'errors': []
      };
    case 'UPDATE_ERRORS':
      return {
        'clickCount': state.clickCount + 1,
        'status': 'errors',
        'rollResults': {},
        'errors': action.errors
      };
    case 'RESET_FORM':
      const clickCount = state.clickCount + 1;
      return {...defaultResults, "clickCount": clickCount};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userRollInfo,
  results
});

export default rootReducer;
