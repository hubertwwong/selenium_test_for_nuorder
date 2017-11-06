# 1. Intro

This is a simple demo on writing some selenium test for test site provided by NuOrder.

The test are done using the Webdriver.io using the wdio test runner. Test are only done using google chrome with the headless option.

I created another repo with a virtual machine that can be used.





# 2. Virtual machine notes.

I create a simple virtual machine using vagrant. Feel free to use it.

Instructions:
1. Install Virtualbox.
2. Install vagrant. You might need to reboot your computer. 
3. git clone the repo.
4. vagrant up. Downloads the machine.
5. vagrant ssh. SSH you to the virtual machine.

The scripts install the following:
1. Java
2. Git
3. Node 6.x.x version. I think its 6.11.5.
4. Google chrome.
5. Other basic tools. git, vim, curl.




# 3. Requirements

1. Java. Whatever version that is required to run selenium standalone.
2. Node.js 6.x.x. I used the most recent LTS version which was 6.11.5.
3. Chrome browser.
4. Test site is up and running.


# 4. Instructions

## 1. npm install

There is a post install hook here that install selenium-standalone

## 2. modify .env

Change the TEST_HOST variable and point it to the url of the website.

## 3. mpm test

This runs the wdio test runner which runs the test in the test/spec directory.





# 5. Test covered

## Page object test.

These test are just to test if parts of the page contain what you expect it to contain. A v2 might have been to use Jest instead of Mocha. Jest has a snapshot feature that can save you a lot of time writing this boilerplate code.

## Functionality.

Testing a positive and a negative test case to make sure that the forms submit properly and displays the correct dialog.





# 6. Improvements

I spent a day on this give or take.

Possible impovements in my mind are:

## 1. Jest 

Probably can use the snapshot feature and replace the test section.
I'm pretty sure you can use it to replace the "Page Object tests" part of the test with a much smaller test.

Might be possible when this gets resolved.
https://github.com/webdriverio/webdriverio/issues/2052

## 2. Using loops

Might have reduce the amount of test cases. 
I think you are trading some complexity for reduced test size.

## 3. Visual regression testing

I done this in ruby but didn't spend the time to research this in nodejs.

## 4. Support for multiple browers.

I just used google chrome and headless option to simplify things. In the real world people use different browsers and it probably would have been nice to have support for multiple browsers.