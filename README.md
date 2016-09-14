# Hello Mobile #

## Getting Started ##

  1. Clone the Repo.
  2. Run `$ npm run setup` to install all the things and init Android/iOS.
  3. Run `$ npm test` in another terminal tab of the root directory to see tests.
  4. Navigate to (localhost:8100/#/tab/hello) in a browser tab to view project. Enable mobile view in Chrome Dev tools

## Using Ionic to Emulate iOS and Android ##

  - Make sure you have Java/Android Studio and Xcode/tooling on your machine
    and in your PATH
  - `$ ionic emulate iOS` for iOS-simulator, `$ ionic run ios` to run on a connected iOS device
  - `$ ionic emulate android` for Android-simulator, `$ ionic run android` to run on a connected Android device


## Unit Testing ##
  - Write unit tests with Jasmine, run them with Karma. Config in the karma.conf.js file.
  - 'npm test' will run these unit tets.
  - Each JS file's test file resides in the same directory -- this is in part to the 'folders by feature' design of the project.


## e2e Testing ##

  - Write e2e UI tests with Jasmine, and run them with Protractor. Config lives in the protractor.conf.js file.
  - Each test file will live in the test/e2e folder. This is because the e2e tests should flow logically from one to another, and can be nested to help with this as the project grows.
