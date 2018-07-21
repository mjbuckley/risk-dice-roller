// Form submissions are sent as strings but need to be numbers. parseSubmission() takes the user submitted values from state.userRollInfo and creates a new object with the original key names maintained and all values converted from strings to numbers, with the exeception of stopNum and stopDifferential, where an empty string will be maintained as it is a valid option. Unaccetable empty strings or non-numbers will be conveted to NaN. Example: {"attackRollNum": "3", "defendRollNum": "sdjfsdj", "stopNum": ''} becomes => {"attackRollNum": 3, "defendRollNum": NaN, "stopNum": ''}.

parseSubmission = (userRollInfo) => {

  let parsedRollInfo = Object.assign({}, ...Object.keys(userRollInfo).map(function(key) {

    let parsedValue = ((key === "stopNum" || key === "stopDifferential") && userRollInfo[key] === '') ? '' : parseFloat(userRollInfo[key]);

    return { [key]: parsedValue };
    }
  );

  return parsedRollInfo;
}

export defualt parseSubmission;
