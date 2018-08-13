# Todo

- Settle on max width of 700 or 750. I have some of both on home page.
- Finalize design. Have a reset form button. Better results display. Add link to about page in both intor and maybe on menu.
- Decide if I like the scrolling locations.
- Mobile styling
- Test in different browsers.

- Write some test for the different input possibilities and verify that the correct results/errors occur.

- Remove PWA stuff before initial build.
- Look over City Weather App notes to see if there's anything important from last time that I might be forgetting.
- Decide on browsers to support. Install core-js for pollyfills if needed.
- Run build (but only after PWA stuff removed) and test that locally and with google speed/accessibility test. Note that serve is installed globally. I can serve the build version of the app using "serve -s build"
- Spell check
- Create a good readme. Have a link to live site (and link from live site to gitub)
- Note.md is is pretty good shape, but clean up/finalize.
- Final code/comment cleanup (remove any lingering console.logs).
- Add to github.
- Deploy.



### Short Term Notes (maybe add some to notes.md)

- I'm putting all css in App.css. I've only imported it in App.js, but since Root.js imports App, the css is available everywhere. However, if I ever used code splitting this would be a problem. I'm not doing code splitting because the site is so small, but maybe make a note of this in notes (and don't use this pattern on larger apps).
- A few very odd inputs (such as -3 attack armies and -1 attack rolls) can result in some slightly confusing (but not incorrect) error notices. I'm ok with this because they are very unlikely to happen without someone trying to break things, plus the error notices aren't wrong, just not super clear. Trying to have perfect notices for everything would make the error section too confusing. Better to have good clear notices for 99% of the cases.
- At one point I was having a problem where there would be errors showing up for stopNum and stopDifferential (possibly not stopNum, but definitely stopDifferential) even though nothing was entered there. It didn't happen all of the time. I feel like clicking in the field would make it more likely (although tabbing seemed ok), but not certain. I realized one problem was that my validation wasn't checking for the existence of a stopDifferential when doing the comparisons to the current differential. I fixed this, and it seemed to stop the problem, but I can't figure out why the error wasn't happening all the time. I think I'm ok now, but that was weird and uncertain enough that I'm keeping the note around.
- I removed the max option from the attackArmies and defendArmies inputs because it sort of overrode my own error checking. On submit it would scroll to the top, but it would use the browser based notification that the number was too high but not show my error notices. There might be a way around this, but I prefer my error notices. Additionally, if there were previous results, it kept those around, which is confusing.
- Although I never explicitly use it, I apparently need to have @fortawesome/fontawesome-svg-core in the package.json or else the other fontawesome packages that I do use won't work.
- NPM ERROR NOTE: I get the following error from npm: "npm WARN ajv-keywords@3.1.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself." Keep in mind if I ever have an issue.
