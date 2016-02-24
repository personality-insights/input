var
  tweets = require('./data/tweets'),
  PIInput = require('../bin/personality-insights-input.js');


console.log(JSON.stringify(PIInput.fromTweets(tweets)).slice(0, 300) + '...');
