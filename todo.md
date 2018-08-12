# Todo

- Settle on max width of 700 or 750. I have some of both on home page.
- At one point if you click in one of the optional fields but didn't enter anything it caused errors to be displayed when submitted (although tabbing seems ok). I couldn't get this to happen more recently, so perhaps something else I did fixed this, but play around with this and make sure it isn't still happening.
- Test all the different possibilities for errors with different inputs. Maybe make some actual tests.
- Finalize design. Have a reset form button. Better results display. Add link to about page in both intor and maybe on menu.
- Decide if I like the scrolling locations.
- Mobile styling
- Spell check
- I'm putting all css in App.css. I've only imported it in App.js, but since Root.js imports App, the css is available everywhere. However, if I ever used code splitting this would be a problem. I'm not doing code splitting because the site is so small, but maybe make a note of this in notes (and don't use this pattern on larger apps).
- Add some sort of check for really larger numbers that might crash things and aren't realistic.
- Remove PWA stuff before initial build.
- Look over City Weather App notes to see if there's anything important from last time that I might be forgetting.
- Decide on browsers to support. Install core-js for pollyfills if needed.
- Run build (but only after PWA stuff removed) and test that locally and with google speed/accessibility test. Note that serve is installed globally. I can serve the build version of the app using "serve -s build"
- Have my name and a link to my github repo somewhere on site.
- Create a good readme. Have a link to live site (and link from live site to gitub)
- Note.md is is pretty good shape, but clean up/finalize.
- Final code/comment cleanup (remove any lingering console.logs).
- Add to github.
- Deploy.



### Short Term Notes

- Although I never explicitly use it, I apparently need to have @fortawesome/fontawesome-svg-core in the package.json or else the other fontawesome packages that I do use won't work.
- NPM ERROR NOTE: I get the following error from npm: "npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself." Keep in mind if I ever have an issue.
