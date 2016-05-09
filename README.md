# Personality Insights Input

![last-release](https://img.shields.io/github/tag/personality-insights/input.svg)
[![npm-version](https://img.shields.io/npm/v/personality-insights-input.svg)](https://www.npmjs.com/package/personality-insights-input)
[![npm-license](https://img.shields.io/npm/l/personality-insights-input.svg)](https://www.npmjs.com/package/personality-insights-input)
[![npm-downloads](https://img.shields.io/npm/dm/personality-insights-input.svg)](https://www.npmjs.com/package/personality-insights-input)

Generate valid IBM Watson Personality Insights service input from different sources.

Supported sources (will add more as requested):
  - Twitter tweets
  - List of texts

## Getting Started

Just **require** the package and call the API with your data:
```
var
  tweets = require('./my_tweets'),
  texts = require('./my_texts'),
  PIInput = require('personality-insights-input'),
  inputFromTweets = PIInput.fromTweets(tweets),
  inputFromTexts = PIInput.fromTexts(texts);
```

You can use the result as payload for your IBM Watson Personality Insights service request.

See the complete [example code for texts][example_code_for_texts] or the [example code for tweets][example_code_for_tweets].


## API Methods

Public methods:
* `fromTweets :: ([Tweet]) -> ContentItems` - Transforms tweets into content items.
* `fromTexts :: ([String], Metadata) -> ContentItems` - Transforms texts into content items. `Metadata` parameter is optional.

Where:
* `Tweet` is a tweet as described in [Twitter's Documentation][tweets_doc].
* `ContentItems` is an `Object` of the form `{ "ContentItems" : [ ContentItem ] }`.
* `ContentItem` is an `Object` as described in [IBM Watson Personality Insights documentation][pi_doc].
* `Metadata` is a subset of `ContentItem`, with attributes:
Metadata {
  **userid** (string, *optional*): Unique identifier for the author of this content.,
  **sourceid** (string, *optional*): Identifier for the source of this content, for example, blog123 or twitter.,
  **created** (integer, *optional*): Timestamp that identifies when this content was created, in milliseconds since midnight 1/1/1970 UTC. Required only for results about temporal behavior data.,
  **language** (string, *optional*): Language identifier (two-letter ISO 639-1 identifier). Both English ("en") and Spanish ("es") input content are supported. The default is English. In all cases, regional variants are treated as their parent language; for example, "en-US" is interpreted as "en".
}

## Build from source

You can run `gulp` command to build the component. Binaries will be deployed to `bin` folder.

[pi_doc]: https://watson-api-explorer.mybluemix.net/apis/personality-insights-v2#!/personality-insights/profile
[tweets_doc]: https://dev.twitter.com/overview/api/tweets
[example_code_for_texts]: https://github.com/ibm-silvergate/personality-insights-input/blob/master/examples/texts_example.html
[example_code_for_tweets]: https://github.com/ibm-silvergate/personality-insights-input/blob/master/examples/tweets_example.html
