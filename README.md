# Adaptive image caching based on network speed with Workbox.js

In order to install the dependencies please execute `npm i` from the project folder.

Once the dependencies have been installed, please run `npm run build`.

Once the build is complete you can find the final, built project under the `build` folder.

## Serve the application
In order to serve the contents of the build folder and to see the final solution execute `npm start`.

> Please note that you need to launch the application on `localhost` and not on an IP address nor `127.0.0.1`, otherwise it will not function.
> This is due to the fact that we either need to serve the application on `https` or `localhost` because service workers require a Secure Context. This is determined by the value of `window.isSecureContext`.