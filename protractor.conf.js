exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    'C:/Users/Wbenmessaoud/Desktop/Wass/Training Zenity/Formation protractor/protractor with cocumber/features/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      'C:/Users/Wbenmessaoud/Desktop/Wass/Training Zenity/Formation protractor/protractor with cocumber/features/stepDefinition/*.steps.js' // accepts a glob
    ]
  }
};
