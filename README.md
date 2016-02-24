# Personality Insights Input
---
Generate valid IBM Watson Personality Insights service input from different sources.

Supported sources (will add more as requested):
  - Twitter tweets

## Getting Started
---
Just **require** the package and call the API with your data:
```
var tweets = require('./my_tweets')
var PIInput = require('personality-insights-input');
var inputPayload = PIInput.fromTweets(tweets);
```

You can use the result as payload for your IBM Watson Personality Insights service request.

See the complete [example code][example_code].


## API Methods
---
Public methods:
* `fromTweets :: ([Tweet]) -> ContentItems` - Returns a text summary for the given profile.

Where:
* `Tweet` is a tweet as described in [Twitter's Documentation][tweets_doc].
* `PersonalityInsightsInput` is an `Object` of the form `{ "ContentItems" : [ ContentItem ] }`.
* `ContentItem` is an `Object` as described in [IBM Watson Personality Insights documentation][pi_doc].


## Build from source
---
You can run `gulp` command to build the component. Binaries will be deployed to `bin` folder.

[pi_doc]: https://watson-api-explorer.mybluemix.net/apis/personality-insights-v2#!/personality-insights/profile
[tweets_doc]: https://dev.twitter.com/overview/api/tweets
[example_code]: https://github.com/ibm-silvergate/personality-insights-input/blob/master/examples/example.html
