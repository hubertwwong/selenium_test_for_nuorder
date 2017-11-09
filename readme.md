# 1. Intro

This is a simple demo on writing some selenium test for test site provided by NuOrder.

The test are done using the Webdriver.io using the wdio test runner. Test are only done using google chrome with the headless option.

I created another repo with a virtual machine that can be used.




# 2. Requirements

1. Java. Whatever version that is required to run selenium standalone.
2. Node.js 6.x.x. I used the most recent LTS version which was 6.11.5.
3. Chrome browser.
4. Test site is up and running.




# 3. Instructions

## 1. npm install

There is a post install hook here that install selenium-standalone. This assmues java was installed on the machine.

## 2. modify .env

Change the TEST_HOST variable and point it to the url of the website. I set it to 127.0.0.1:3000.


## 3. npm test

This runs the wdio test runner which runs the test in the test/spec directory.





# 4. Test covered

## Page object test.

These test are just to test if parts of the page contain what you expect it to contain. A v2 might have been to use Jest instead of Mocha. Jest has a snapshot feature that can save you a lot of time writing this boilerplate code.

## Functionality.

Testing a positive and a negative test case to make sure that the forms submit properly and displays the correct dialog.





# 5. Improvements

I spent a day on this give or take.

Possible impovements in my mind are:

## 1. Jest 

Jest's snapshot feature might have been a interesting way of reducing the amount of test that needs to be written.

This might be possible when this gets resolved or not using wdio test runner.
https://github.com/webdriverio/webdriverio/issues/2052

## 2. Using loops

Having an array might have reduce the amount of test cases. 
I think you are trading some complexity for reduced test size. 

## 3. Visual regression testing

I done this in ruby but didn't spend the time to research this in nodejs.

## 4. Support for multiple browers and mulltiple resolutions.

I just used google chrome and headless option to simplify things. In the real world people use different browsers and it probably would have been nice to have support for multiple browsers and different resolutions.