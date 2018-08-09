# Todo

- Scrolling basically works. I might change the exact scroll location, but it's good. The only problem is on subsequent submissions. If there were errors and then the user submits, the status remains 'errors' and it won't scroll. The same problem exists for 'success'. Figure out a good solution. Perhaps some sort of clicked state that gets set when clicked, which is then checked for and removed before rerender?

- Make About and 404 into full pages
- Fix console errors: keys on mapped element, table issue, others?
- At one point if you click in one of the optional fields but didn't enter anything it caused errors to be displayed when submitted (although tabbing seems ok). I couldn't get this to happen more recently, so perhaps something else I did fixed this, but play around with this and make sure it isn't still happening.
- Test all the different possibilities for errors with different inputs. Maybe make some actual tests.
- Finalize design. Have a reset form button. Better results display. Add link to about page in both intor and maybe on menu.
- Mobile styling
- I'm putting all css in App.css. I've only imported it in App.js, but since Root.js imports App, the css is available everywhere. However, if I ever used code splitting this would be a problem. I'm not doing code splitting because the site is so small, but maybe make a note of this in notes (and don't use this pattern on larger apps).
- Add note somewhere about how roll number is automatically adjusted as needed.
- Add some sort of check for really larger numbers that might crash things and aren't realistic.
- Remove PWA stuff before initial build.
- Look over City Weather App notes to see if there's anything important from last time that I might be forgetting.
- Make changes (in package.json?) to have site title show up instead of React App (also change other things there like version number, description, etc.).
- Add favicon?
- Make sure head stuff is good, and be sure there are good meta descriptions (use Helmet).
- Decide on browsers to support. Install core-js for pollyfills if needed.
- Run build (but only after PWA stuff removed) and test that locally and with google speed/accessibility test. Note that serve is installed globally. I can serve the build version of the app using "serve -s build"
- Have my name and a link to my github repo somewhere on site.
- Create a good readme. Have a link to live site (and link from live site to gitub)
- Note.md is is pretty good shape, but clean up/finalize.
- Final code/comment cleanup (remove any lingering console.logs).
- Add to github.
- Deploy.



### Short Term Notes

- NPM ERROR NOTE: I get the following error from npm: "npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself." Keep in mind if I ever have an issue.
