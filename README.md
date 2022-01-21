## Description
This is a sample automated test for validating an Image Search app end to end functionality using Cypress.io

## Pre-requisites

You should have node install in order to run the commands below. Check out [Nodejs](https://nodejs.org/en/). If you're using npm to install Cypress, they support: Node.js 12 or 14 and above.

## Commands

Download the project from [github](https://github.com/jldaluddung/ImageSearch_cypressTest.git) as a zip file. Extract the folder and navigate to the path where the files (specifically the package.json file) are located.
```bash
cd /your/project/path
```

Install Cypress for Mac, Linux, or Windows in the project path
```bash
npm install cypress --save-dev
```

## Running the test from Cypress
Open cypress by invoking the following command in the project root
```bash
npm run cypress:open
```
Once cypress loads, select on the spec.js test or click Run integration tests.

The test will not stop automatically, so you will need to click "Stop" in cypress to end the test.
