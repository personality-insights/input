
/*
 *  Copyright 2015 IBM Corp. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
var contentItems, fromText, fromTexts, fromTweet, fromTweets, tweetParentId;

tweetParentId = function(tweet) {
  if (tweet.in_reply_to_screen_name != null) {
    return tweet.in_reply_to_user_id;
  } else if (tweet.retweeted && (tweet.current_user_retweet != null)) {
    return tweet.current_user_retweet.id_str;
  }
};

fromTweet = function(tweet) {
  return {
    id: tweet.id_str,
    userid: tweet.user.id_str,
    sourceid: 'twitter',
    language: tweet.lang,
    contenttype: 'text/plain',
    content: tweet.text.replace('[^(\\x20-\\x7F)]*', ''),
    created: Date.parse(tweet.created_at),
    forward: tweet.retweeted,
    reply: tweet.in_reply_to_screen_name != null,
    parentid: tweetParentId(tweet)
  };
};

fromTweets = function(tweets) {
  return contentItems(tweets.map(fromTweet));
};

contentItems = function(items) {
  return {
    contentItems: items
  };
};

fromText = function(metadata, text, id) {
  return {
    id: id,
    userid: metadata.userid,
    sourceid: metadata.sourceid || 'generic',
    language: metadata.language,
    contenttype: 'text/plain',
    content: text,
    created: metadata.created
  };
};

fromTexts = function(texts, metadata) {
  if (metadata == null) {
    metadata = {};
  }
  return contentItems(texts.map(fromText.bind(void 0, metadata)));
};

module.exports = {
  fromTweets: fromTweets,
  fromTexts: fromTexts
};
