# Todo

- Should input be inside label? Consider making labels two level. Something like attack differential at the top in larger/darker color, then an expliation below that in a smaller/lighter color.
- Better ways to display errors.
- Font Awesome React stuff as a way to use dice and maybe some arrow icons?
- Add some sort of check for really larger numbers that might crash things and aren't realistic.
- Display actual roll history. It might be leaving off the last roll. Check and fix if need be.
- Test all the different possibilities for errors. Maybe make actual tests.
- clean up params in getAttackRollNum() inside of rollTillStop().
- clean up convertSubmission
- I've changged handleSubmit.js to return an update or error action (but not dispatch it). This is the right approach, but I need to make sure the form I'm returning them in matches what is expected. Right now they are not.
- Dice rolling JS logic is done (there might be errors to find, but structure is done). Now I need to integrate that into Redux/React.
- I mostly fixed my usage to standardize on attack/defend RollNum, but I think there is still some improper usage in some react components (but util stuff should be good).



- Look over City Weather App notes to see if there's anything important from last time that I might be forgetting.
- Remove PWA stuff before initial build.
- Decide on browsers to support. Install core-js for pollyfills if needed. Be sure not to leave this until the end because its much easier to to this from the start.
- Decide about using prop-types (is that still being used?), and flow/typescript.
- Add tests, where to place test files (own directory or next to files they are testing)?

## Notes

- At some point install source map explorer, which is useful for analyzing bundle size of build (run "npm install source-map-explorer"). Then add:
```
"analyze": "source-map-explorer build/static/js/main.*",
```
to the scripts section of the package.json. To use, run "npm run build" then "npm run analyze".
- Consider redux-logger for logging and debugging actions.
- note: serve is installed globally. I can serve the build version of the app using "serve -s build"
- NPM ERROR NOTE: I get the following error from npm: "npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself."
- At some point I should probably try to extend the basic ESlint rules used by CRA. It is possible to do without ejecting, but it does require a few steps, so decided what I want. Also might want to add linting output in the editor? It's also possible that Prettier will do enough of what I want, so also consider that.



SAMPLE REDUX STATE

{
  userRollInfo: {
    "attackArmies": 10,
    "defendArmies": 5,
    "attackRollNum": 3,
    "defendRollNum": 2,
    "stopNum": '',
    "stopDifferential": ''
  },
  "errorMessages": {
    "attackArmies": '',
    "defendArmies": '',
    "attackRollNum": '',
    "defendRollNum": '',
    "stopNum": '',
    "stopDifferential": ''
  },
  "results" {
    "history": [].
    "attack": 4,
    "defense": 0,
    "message": ''
  }
}



// Example of object when passed in to rollTillStop for the first time
{
  "attackArmies": 10,
  "defendArmies": 5,
  "attackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "lastRoll": {
    attackRolls: [],
    defendRolls: [],
    attackResult: 0,
    defendResult: 0
  },
  "message": "",
  "history": []
}

// suppose we roll and attack looses 2. The new object would look like this:
{
  "attackArmies": 8,
  "defendArmies": 5,
  "attackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "lastRoll": {"attackRolls": [2, 1, 1], "defendRolls": [6, 5], "attackResult": -2, "defendResult": 0},
  "message": ""
  "history": [
    {
      "attackArmies": 10,
      "defendArmies": 5,
      attackRolls: [],
      defendRolls: [],
      attackResult: 0,
      defendResult: 0
    }
  ]
}

// then if each loose one:

{
  "attackArmies": 7,
  "defendArmies": 4,
  "attackRollNum": 3,
  "defendRollNum": 2,
  "stopNum": '',
  "stopDifferential": ''
  "lastRoll": {"attackRolls": [6, 1, 1], "defendRolls": [5, 5], "attackResult": -1, "defendResult": -1},
  "message": ""
  "history": [
    {
      "attackArmies": 10,
      "defendArmies": 5,
      attackRolls: [],
      defendRolls: [],
      attackResult: 0,
      defendResult: 0
    },
    {
      "attackArmies": 8,
      "defendArmies": 5,
      attackRolls: [2, 1, 1],
      defendRolls: [6, 5],
      attackResult: -2,
      defendResult: 0
    }
  ]
}
