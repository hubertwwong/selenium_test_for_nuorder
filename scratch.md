# Todo.

1. Get a gulp system to work.
2. Get 1 test to work.
3. Try to aim for a headless test system. (Semaphone chrome)
4. Have some command line option to allow you to point to that directory.
5. Determinne what test you want.
6. Maybe provide a VM?



# To think of.

1. Pure webdriverio approach.
2. Do i asusme that the server is up? (I think I do. I should not assume anything.)
3. Some config system to point to the url.
4. Visual regression testing.



# You probably need

A bash script or anisble script to install java.
Or some note about it



# bash script
sudo apt-get install -y default-jdk

need to install the browsers



# instruction notes

selenium standalone start?
I think this needs to be a global

env setup.

# chrome install

https://leurproject.co/install-google-chrome-ubuntu-14-0416-04-64/


wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install -y google-chrome-stable


# Links to research

https://gist.github.com/addyosmani/5336747
google chrome headless
I wonder about these packages...

https://medium.com/@mannyluvstacos/using-headless-chrome-for-your-selenium-tests-with-webdriverio-ce99b09d564

http://webdriver.io/guide/services/selenium-standalone.html

https://stackoverflow.com/questions/38846079/only-local-connections-are-allowed-chrome-selenium-webdriver

https://hub.docker.com/r/spikerlabs/chrome-headless/


https://stackoverflow.com/questions/42303119/selenium-webdriverio-chrome-headless

https://gist.github.com/ziadoz/3e8ab7e944d02fe872c3454d17af31a5

https://stackoverflow.com/questions/38846079/only-local-connections-are-allowed-chrome-selenium-webdriver

gulp-util

https://github.com/pmros/webdriverio-starter

http://silvenon.com/selenium-testing-workflow-with-webdriverio/
This might have been older but shorter version of the gulp thing.

https://github.com/vvo/selenium-standalone
Selenium standalone

http://webdriver.io/guide/getstarted/boilerplate.html


https://github.com/jonyet/webdriverio-boilerplate

https://semaphoreci.com/community/tutorials/setting-up-an-end-to-end-testing-workflow-with-gulp-mocha-and-webdriverio
This what how i setup it the last time.

http://webdriver.io/

https://facebook.github.io/jest/docs/en/getting-started.html

https://github.com/facebook/jest/blob/master/integration_tests/__tests__/console.test.js
This shows how to use jest on not react stuff..
