# My Research - Automated a11y testing
A standalone Cypress instance to automate tests of the function and accessibility of the My Research system.

## Reason for this repo
We need an independent verifier of accessibility and usability issues for compliance in the My Research system (Ethics).

## Credentials - IMPORTANT
In order to allow the testing platform to access the product to test, we need to provide a user/pass/site combination.

This is currently stored in `/credentials.js' as a named import.

So, in order for the tests to be able to login to My Research successfully and run - first create `credentials.js` in the root of this repository, and add the following code, replacing the user/pass/site combination with valid entries.:

```
IMPORTANT - DO NOT COMMIT CREDENTIALS TO THE GITHUB REPO
```

```
export const credentials = {
    site: 'test site url',
    username: 'test',
    password: 'test'
};
```
The tests use this file with the object keys in it to login to the system - the tests will fail without this being done.

## How to run 
##### (will just run tests and provide a pass/fail result, not be interactive)
1. Run `npm install`
2. Run `npm run cypress:run`

The tests will run without a browser being spawned and will simply return a pass or fail.

## How to watch
##### (will just run the tests while presenting the run in a browser window to review the process as it happens - will provide a pass or fail (if any tests fail))
1. Run `npm install`
2. Run `npm run cypress:watch`

## How to interact
##### (Will open the Cypress interface to watch the rests run, and debug any failures)
1. Run `npm install`
2. Run `npm run cypress:open`
3. Select `e2e Testing`
4. Select the browser and click on the `Start E2E testing` button.
5. Select the 'spec' (testing file) to run and debug

## How to debug a11y failures
##### (using the 'How to interact' workflow above, we can see steps to a failure, and analyse the issue)
1. Run a 'spec' file know to have a test failure
2. At the idetification of an a11y (accessibility failure), open the developer inspector (often F12).
3. Be sure to be on the `console` tab of the developer inspector.
4. In the test runner window on the left of the browser output, a message of `- a11y error!` will appear when an a11y failure has been found - click to highlight this entry
5. In your console window in your developer inspector, details of the failure will appear, along with a link on how to fix the issue.

### For more information
Please reach out to the UQ Research Systems - Pricipal UX Developer - Ky Lane (k.lane@uq.edu.au) for any clarification or requests to enhance this repo.