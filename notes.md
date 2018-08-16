### Tests

I added a number of simple tests to the utility functions. They will catch many errors, but there is not 100% coverage and there are some cases where a test might not catch an error. Treat the tests as a helpful tool but not a guarantee of perfection.


### Redux State Shape:

```
{
  'userRollInfo': {
    'attackArmies': '',
    'defendArmies': '',
    'attackRollNum': '',
    'defendRollNum': '',
    'stopNum': '',
    'stopDifferential': ''
  },
  'results': {
    "clickCount": 0,
    "status": 'none',
    "rollResults": {
      "history": [],
      "attack": '',
      "defense": '',
      "message": '',
    },
    "errors": []
  }
}
```

userRollInfo is information provided by the user in the roll form. No validation is done on the input before it is saved into the state. Validation is done when the form is actually submitted. The values should be integers (or an empty string for stopNum/Differential), but this just reflects what's in the form, so it could be anything.

The results object can have one of three statuses:
1) 'none': The form has not be submitted (or was reset). rollResults and errors will be empty.
2) 'results': The form was submitted with valid information and there is a result. The history array will have the complete roll history, the attack and defense keys have the final values for each side, and the message explains why rolling stopped. The errors array will be empty.
3) 'errors': The form was submitted and there were errors. The errors array will contain the error message(s). Each error is an array of the form [name of field where error occurred, error description]. The results object will be empty.

clickCount is updated when the user clicks on the roll or reset button. It is used to know when to scroll the screen to a useful spot.


### The History Array Form

This array is built in rollTillStop(), and it is part of the Redux state when the state.results.status is "results".

```
[ {attackRolls: [], defendRolls: [], attackArmies: 10, defendArmies: 8, attackResult: 0, defendResult: 0},
  {attackRolls: [1, 4, 6], defendRolls: [2, 6], attackArmies: 9, defendArmies: 7 ,attackResult: -1, defendResult: -1},
  etc...
]
```

Contains the results of each roll from beginning to end. Note that the first object is actually the starting values before the first roll, all others are from rolls.



### The Form Of The Object Passed Around In rollTillStop():

```
{
  'attackArmies': '',
  'defendArmies': '',
  'attackRollNum': '',
  'defendRollNum': '',
  'stopNum': '',
  'stopDifferential': '',
  'lastRoll' = {
    attackRolls: [],
    defendRolls: [],
    attackResult: 0,
    defendResult: 0
  };
  'history': [],
  'originalAttackRollNum': ''
}
```

Similar to the form of userRollInfo from the Redux state, but different in key ways. Attack/defend armies and roll numbers are updated as the rolling progresses. orignalAttackRollNum is the initial roll number desired by user. It is needed in recalculate the attack roll number after each hand (the original defense number is not needed because it can only go down, whereas the attack number can rise and fall depending on stopNum/Differential). stopNum and stopDifferential are the same as that in userRollInfo. They, along with orignalAttackRollNum never change, but everything else does. Last roll is self explinatory. History is the complete history the has brought about the current roll state. After every hand the previous lastRoll (along with the attack/defense army numbers) is added to the history. See above explanation of the history array.


### Object Returned By rollTillStop()

```
{
  'message': 'A stop message',
  'history': [the history array]
}
```

The message is just a message explaining why rolling stopped (someone won, stop condition met, etc.). The history is just the history array described above.
