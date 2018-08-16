export const updateUserRollInfo = rollInfo => ({
  'type': 'UPDATE_USER_ROLL_INFO',
  rollInfo
});

export const updateResults = results => ({
  'type': 'UPDATE_RESULTS',
  results
});


export const updateErrors = errors => ({
  'type': 'UPDATE_ERRORS',
  errors
});

// Not using this yet but will add later
export const resetForm = () => ({
  'type': 'RESET_FORM'
});
