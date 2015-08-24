<h1 align="center">
  <img src ="https://raw.githubusercontent.com/kingscott/newton/master/icon128.png" />
  <br/>
  newton
</h1>

# get it on the [chrome store](https://chrome.google.com/webstore/detail/newton/ogkmipmkbppmcmdgeomnhlbgijbijjpi)
![marquee](https://raw.githubusercontent.com/kingscott/newton/master/screenshot2.png)

Replaces your new tab with a minimal page, consisting of a clock and one of over 800 beautiful backgrounds!

## technical and forking
It's built using React.js and Babel.

If you're interested in viewing/running/forking the code, here are the instructions to install:

```shell
➜  ~ git clone {your link to clone}
➜  ~ cd newton
➜  ~ npm install
➜  ~ npm run build
➜  ~ npm start
```

This repo uses webpack-dev-server, so if you make a change to src/app.js and save, it will recompile and hot-load the app at localhost:2020. If you want to create a build.js file to use somewhere (for production), then run:

```shell
➜  ~ npm run build-app
```

and it will show up in lib/build.js.

## requirements

npm

**Note:** I did not include the file I pull backgrounds from as it could make the app compromised.
