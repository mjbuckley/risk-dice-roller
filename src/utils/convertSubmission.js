/**
 * The values from the user's form submission are sent as strings but need to be numbers. This
 * function converts the user's values to numbers. There are two situations where a value will not
 * be converted:
 * 1) Any empty string is an accebtable value for stopNum and stopDifferential. In that case the
 * empty string will be preserved.
 * 2) If a value cannot be converted to a number it will be converted to NaN.
 * Example: {"attackRollNum": "3", "defendRollNum": "sdjfsdj", "stopNum": ''} becomes =>
 * {"attackRollNum": 3, "defendRollNum": NaN, "stopNum": ''}
 */
const convertSubmission = (rollInfo) => {

  // creates array of objects with each object being of form {oldKey: convertedValue}
  let temp = Object.keys(rollInfo).map(function(key) {

    let convertedValue = ((key === "stopNum" || key === "stopDifferential") && rollInfo[key].trim() === '') ? '' : parseFloat(rollInfo[key]);

    return { [key]: convertedValue };
  });


  // Takes array of objects and spreads them into a single object mimicing the original rollInfo
  // but now with converted values.
  let convertedRollInfo = Object.assign({}, ...temp);

  return convertedRollInfo;
};

export default convertSubmission;
