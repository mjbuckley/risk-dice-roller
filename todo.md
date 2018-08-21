# Todo

- Create a good readme. Have a link to live site.
- Spell check
- Have another person look at it and use it.


- GitHub showed a security vulnerability in package-lock.json for the url-parse package. See what if anything I need to do.

- On CWA I on my error pages I added a meta robots noindex tag to keep error pages from being indexed. I think this is the correct thing to do, but not positive.

- Since I only have two pages, perhaps I can just have an about.html file?

- Run build (but only after PWA stuff removed) and test that locally and with google speed/accessibility test. Note that serve is installed globally. I can serve the build version of the app using "serve -s build". Also, see if I need to do anything else here in terms of redirecting to index.js, etc.

- Use helmet?
- Depending on my deploy method I might also need an actual 404 page as well as my fake one.

- Add stuff needed to auto deploy on push and to handle browser history on github pages, then deploy.


- After deploy:
  - Check on older IE/Edge that I still want to support and see what if any pollyfills or changes are needed (core-js is good for pollyfills).
  - Check on a few Android devices.

- REMOVING PWA STUFF:
  - Removed these lines from index.html:    <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
      --> <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  - Commented out PWA stuff in index.js
  - Removed manifest.json from public folder.
  - WILL PROBABLY NEED TO change the build line in package.json to stop autogenerating service-worker file. Not needed, but cleaner this way: "react-scripts build && rm build/service-worker.js"
