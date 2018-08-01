import { combineReducers } from 'redux';
// import individual reducers here

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
    default:
      return state;
  }
}

// can probably just have empty object for rollResults, but should document somewhere what it would look like if used.
// const defaultResults = {
//   "status": 'none',
//   "rollResults": {
//     "history": [],
//     "attack": '',
//     "defense": '',
//     "message": '',
//   },
//   "errors": []
// };

const defaultResults = {
  "status": 'none',
  "rollResults": {},
  "errors": []
};

function results(state = defaultResults, action) {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {
        'status': 'results',
        'rollResults': action.results,
        'errors': []
      };
    case 'UPDATE_ERRORS':
      return {
        'status': 'errors',
        'rollResults': {},
        'errors': action.errors
      };
    case 'RESET_FORM':
      return defaultResults;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userRollInfo,
  results
});

export default rootReducer;
