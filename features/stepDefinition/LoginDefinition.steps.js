import { Given } from '@cucumber/cucumber';

const {When, Then, Before} = require('@cucumber/cucumber');  
const { browser, element } = require('protractor');  
  
  
var LoginSteps = function() {

Before({timeout: 60 * 1000}, function() {  
  // Does some slow browser/filesystem/network actions  
  browser.manage().window().maximize();  
});  
  
Given('open the application {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return  browser.get(string); 
});

  
When(/^user login with (.*) and (.*)$/, function (string, string2) {  
  // Write code here that turns the phrase above into concrete actions  
  element(by.model('Auth.user.name')).sendKeys(string);  
  element(by.model('Auth.user.password')).sendKeys(string2);  
  return console.log("entered the user name and password");  
});  
  
When(/^User enters the Admin (.*)$/, function (string) {  
  // Write code here that turns the phrase above into concrete actions  
  element(by.model('model[options.key]')).sendKeys(string);  
  return console.log("enetered the logged in user name");  
    
});  
Then(/^user should login succcessfully$/, function () {  
  // Write code here that turns the phrase above into concrete actions  
  return console.log("success");  
});  
}