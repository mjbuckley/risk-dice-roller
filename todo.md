# Todo


- July 20:
  - I use attack/defend RollNum and Num. Decide on one and stick with it. (mostly in errorcheck)
  - Double check all my functions in errorcheck. Then clean up and link together properly with everything else.


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
