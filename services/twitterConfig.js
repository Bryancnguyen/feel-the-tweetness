var Twitter = require('twitter');
const { twitterKeys } = require('./apiKeys');

const extractTweetText = function(body) {
  return body.statuses.map( tweet => tweet.text )
}

exports.queryTwitter = function(query, numOfTweets) {

  var client = new Twitter({
    consumer_key: twitterKeys.consumer_key,
    consumer_secret: twitterKeys.consumer_secret,
    access_token_key: twitterKeys.access_token_key,
    access_token_secret: twitterKeys.access_token_secret
  });

  let resultingTweets;

  return new Promise(function(resolve, reject) {
    console.log("Pinging Twitter...");
    client.get('search/tweets', {q: query, count: numOfTweets}, function(error, tweets, response) {
      if(error) reject(error);
      resultingTweets = extractTweetText(tweets);
      resolve(resultingTweets);
    });
  });
}