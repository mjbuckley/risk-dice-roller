# Todo

- Create a good readme. Have a link to live site.
- Spell check
- Have another person look at it and use it.

- GitHub showed a security vulnerability in package-lock.json for the url-parse package. See what if anything I need to do.


- Add a robots.txt?
- On CWA I on my error pages I added a meta robots noindex tag to keep error pages from being indexed. I think this is the correct thing to do, but not positive.


- Decide deploy method. Set up needed stuff (like homepage in package.json and github pages specific package). Decide on on how to handle browser routing. Either use the rafrex github pages 404 redirect thing, or perhaps since I only have two pages I can just have an about.html file that is the same as index.js? Decide if I should use helmet or if it is really needed (probably yes if doing the two html file route). Decide if I need a real 404 page. Document all I did and what the build/deploy process is.

- Run build and test that locally and with google speed/accessibility test. Note that serve is installed globally. I can serve the build version of the app using "serve -s build". Also, see if I need to do anything else here in terms of redirecting to index.js, etc.


- REMOVING PWA STUFF:
  - Removed these lines from index.html:    <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
      --> <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  - Commented out PWA stuff in index.js
  - Removed manifest.json from public folder.
  - WILL PROBABLY NEED TO change the build line in package.json to stop autogenerating service-worker file. Not needed, but cleaner this way: "react-scripts build && rm build/service-worker.js"
  - Document what I did somewhere

- After deploy:
  - Check on older IE/Edge that I still want to support and see what if any pollyfills or changes are needed (core-js is good for pollyfills).
  - Check on a few Android devices.
