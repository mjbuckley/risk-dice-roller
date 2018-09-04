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

- For the roll form inputs I specify a type="number". This is useful because on most mobile devices it brings up a numeric keypad. However, different browsers handle things differently, and there are some weird quirks. For example, chrome won't allow non numbers to be entered, but it will allow decimals (it shouldn't). If a decimal is entered, it is my error checking that catches it. Mobile Safari allows anything to be entered, but if the form is submitted and anything is not an integer, then the browser gives an error to the user and my errors never get displayed. I'm sure it's different in other places. I think the benefits are worth the problems, but keep this in mind and reconsider in the future and consider other options. I don't care so much what browsers allow people to enter, but I want them to get my errors, not the browsers.
- I should probably add back a Web App Manifest (manifest.json). I removed it because I thought it was only needed when using service workers and a more fully implemented progressive web app setup, but it is also useful in other cases, like saving site to a cell home screen.
- Maybe add some sort of graphic or icon that visually indicates the result instead of just the numbers and text.
- Current mobile styling is fine but could be improved.
- Not sure if I like the spot that the app scrolls to when there are results. If the results are long enough then it isn't obvious to the user that they are still on the same page as the form. Maybe scroll somewhere else or at least give a visual clue that they are on the same page.
- Perhaps add more to the about page.
- In Safari you can't tab to the "Roll Dice" button (but tabbing to all form entires works). A quick check suggests that this is a Safari issue that needs to be changed in the Safari preferences, but make sure I'm not missing something.
- Another mobile Safari issue is that when the keyboard is in the split apart mode, it obscures the final form entry. You can still enter a value, you just can't see it while typing. This is really a Safari bug, but I might want to do something like add space to the bottom of the page to get around this. Also, the issue does not occur in the normal keyboard mode. I'm not going to do anything now, but reconsider in the future.



### Scroll To Top

React Router does not automatically scroll new routes to the top of the page. To fix this, I wrap every route in a ScrollToTop component that compares current location to previous location on update and scrolls to the top as needed.



### Running Site Locally

Running the site locally using ```npm start``` works fine. However, running the built site locally using serve has issues. To simulate how GitHub pages works, you would run ```serve build``` (note that CRA user guide says ```serve -s build```, but this is to simulate servers that are able to redirect all requests to index.html, but ghpages doesn't, hence the dropped -s). However, because GitHub serves from a subdirectory, the paths for all the cs and js is prefixed with that url and therefore they don't load properly when running build locally. There is probably a setting in serve to get around this, but just noting to be aware of. Also, you can always temporarily remove the homepage section from package.json and everything works fine.



### Removing PWA Stuff

I decided I didn't want this to be a PWA for now, but CRA is PWA by default, so I removed those features. The steps I took were:

- Removed this line from index.html: ```<link rel="manifest" href="%PUBLIC_URL%/manifest.json">```
- Commented out PWA stuff in index.js
- Removed manifest.json from public folder.
- Changed the build line in package.json to stop autogenerating service-worker.js file. It now reads: ```"react-scripts build && rm build/service-worker.js"``` The file probably does nothing without the call to register service worker, but it's cleaner this way.
- NOTE: In hindsight it is probably worthwhile keeping the web app manifest around even if not using service workers or other PWA features. Useful for things like saving site to a cell home screen.



### Deployment Notes

**TLDR:** After everything is set up, just run ```npm run deploy```. This will build the site and push it to the gh-pages branch. It does not push code changes to the master branch (for that push like normal), just the build folder contents.

There are good instructions on deploying to GitHub pages in the CRA user guide [deployment section](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages), but here is the gist:
  - Add a homepage section in package.json: ```"homepage": "https://mjbuckley.github.io/risk-dice-roller"```
  - Install gh-pages package
  - Add predeploy and deploy sections to scripts section of package.json: ```"predeploy": "npm run build", "deploy": "gh-pages -d build"```
  - Pages are served from a different location when running locally ('/') vs. GitHub Pages ('/risk-dice-roller'). Create React App has a PUBLIC_URL variable that returns the public url for the build but nothing when run locally. In JS it can be accessed with {process.env.PUBLIC_URL}. CRA uses this where appropriate for the things that it handles, but React Router needs to be clued in. Adding the following in root.js allows React Router to run properly in both environments:```<Router basename={process.env.PUBLIC_URL}>```
  - Make sure routing is taken care of (see explanation below).
  - Now, to deploy just run ```npm run deploy```. This will run build and then push the build folder to the gh-pages branch on the repo. This is independent of the master branch. The master needs to be pushed on its own.
  - Note that because of how GitHub Pages works there are some issues with running the built version locally. See the "Running Site Locally" section for info.

**Routing:** Because I'm serving the site from GitHub Pages and also using browser history, typically you need a way redirect all requests to index.html so that pages other than the home page that are entered into the browser directly show up properly. There are several clever workarounds for this, but since I only have two pages other than the home page, I decided to just add an about.html and a 404.html file to my build folder. The actual contents of the pages are identical to index.html. To do this I added "&& cp build/index.html build/about.html && cp build/index.html build/404.html" to the end of the build script in package.json. The site meta description and title are still able to be unique because they are handled using react-helmet. There are a lot of reasons why this approach wouldn't work for a larger site, but I think it is a good simple method for this one.



### Polyfills

I have added pollyfills for isInteger and array.find because IE 11 does not have them and the Babel settings do not transpile them into something IE 11 can use. The pollyfills comes from the core-js node package. This whole package is installed, but only the two pollyfills are actually imported (into the index.js file). If I ever need to install more pollyfills it would probably make sense to create a separate pollyfill.js file where they are imported and then import that into index.js, but this is a fine approach for now.



### Other Notes

- I'm putting all css in App.css. I've only imported it in App.js, but since Root.js imports App, the css is available everywhere. However, if I ever used code splitting this would be a problem. I'm not doing code splitting because the site is so small, but maybe make a note of this in notes (and don't use this pattern on larger apps).
- The ScrollToTop component only imports Component and not React. This is unusual but I believe correct based on what it does. However, keep this in mind in case I run across and errors.
- Consider changing way I have reset links set up. They work but you cannot get to them with the tab button.
- A few very odd inputs (such as -3 attack armies and -1 attack rolls) can result in some slightly confusing (but not incorrect) error notices. I'm ok with this because they are very unlikely to happen without someone trying to break things, plus the error notices aren't wrong, just not super clear. Trying to have perfect notices for everything would make the error section too confusing. Better to have good clear notices for 99% of the cases.
- I removed the max option from the attackArmies and defendArmies inputs because it sort of overrode my own error checking. On submit it would scroll to the top, but it would use the browser based notification that the number was too high but not show my error notices. There might be a way around this, but I prefer my error notices. Additionally, if there were previous results, it kept those around, which is confusing.
- I have 750px as a max width for everything except for the home page intro, which is a bit narrower. I think it looks better this way on large screens, but noting here because it might be easy to forget about or later seem to be an error.
- I don't have a sitemap because the site is so small, otherwise I probably would.
- I don't have a robots.txt file because the only thing I need to specify not to index is the 404 page, which I do with a meta robots tag. I think this is probably the right approach.
- Although I never explicitly use it, I apparently need to have @fortawesome/fontawesome-svg-core in the package.json or else the other fontawesome packages that I do use won't work.
- NPM ERROR NOTE: I get the following error from npm: "npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself." Digging in to this a bit suggests it's not an issue for me unless I'm every trying to use ajv directly, but keeping note around.
