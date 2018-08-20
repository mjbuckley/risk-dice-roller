# Notes

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

Similar to the form of userRollInfo from the Redux state, but different in key ways. Attack/defend armies and roll numbers are updated as the rolling progresses. orignalAttackRollNum is the initial roll number desired by user. It is needed in recalculate the attack roll number after each hand (the original defense number is not needed because it can only go down, whereas the attack number can rise and fall depending on stopNum/Differential). stopNum and stopDifferential are the same as that in userRollInfo. They, along with orignalAttackRollNum never change, but everything else does. Last roll is self explanatory. History is the complete history the has brought about the current roll state. After every hand the previous lastRoll (along with the attack/defense army numbers) is added to the history. See above explanation of the history array.



### Object Returned By rollTillStop()

```
{
  'message': 'A stop message',
  'history': [the history array]
}
```

The message is just a message explaining why rolling stopped (someone won, stop condition met, etc.). The history is just the history array described above.



### Tests

I added a number of simple tests. They will catch many errors, but there is not 100% coverage and there are some cases where a test might not catch an error. Treat the tests as a helpful tool but not a guarantee of perfection.



### Future Enhancements

- Current mobile styling is fine but could be improved.
- Not sure if I like the spot that the app scrolls to when there are results. If the results are long enough then it isn't obvious to the user that they are still on the same page as the form. Maybe scroll somewhere else or at least give a visual clue that they are on the same page.



### Other Notes

- I'm putting all css in App.css. I've only imported it in App.js, but since Root.js imports App, the css is available everywhere. However, if I ever used code splitting this would be a problem. I'm not doing code splitting because the site is so small, but maybe make a note of this in notes (and don't use this pattern on larger apps).
- Consider changing way I have reset links set up. They work but you cannot get to them with the tab button.
- A few very odd inputs (such as -3 attack armies and -1 attack rolls) can result in some slightly confusing (but not incorrect) error notices. I'm ok with this because they are very unlikely to happen without someone trying to break things, plus the error notices aren't wrong, just not super clear. Trying to have perfect notices for everything would make the error section too confusing. Better to have good clear notices for 99% of the cases.
- At one point I was having a problem where there would be errors showing up for stopNum and stopDifferential (possibly not stopNum, but definitely stopDifferential) even though nothing was entered there. It didn't happen all of the time. I feel like clicking in the field would make it more likely (although tabbing seemed ok), but not certain. I realized one problem was that my validation wasn't checking for the existence of a stopDifferential when doing the comparisons to the current differential. I fixed this, and it seemed to stop the problem, but I can't figure out why the error wasn't happening all the time. I think I'm ok now, but that was weird and uncertain enough that I'm keeping the note around.
- I removed the max option from the attackArmies and defendArmies inputs because it sort of overrode my own error checking. On submit it would scroll to the top, but it would use the browser based notification that the number was too high but not show my error notices. There might be a way around this, but I prefer my error notices. Additionally, if there were previous results, it kept those around, which is confusing.
- I have 750px as a max width for everything except for the home page intro, which is a bit narrower. I think it looks better this way on large screens, but noting here because it might be easy to forget about or later seem to be an error.
- Although I never explicitly use it, I apparently need to have @fortawesome/fontawesome-svg-core in the package.json or else the other fontawesome packages that I do use won't work.
- NPM ERROR NOTE: I get the following error from npm: "npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself." Digging in to this a bit guggests it's not an issue for me unless I'm every trying to use ajv directly, but keeping note around.
