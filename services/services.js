var Twitter = require('./twitterConfig');
var Watson = require('./watsonConfig');
var Spotify = require('./spotifyConfig');

exports.tweetToSongs = function(query, respondTo) {
  let numOfTweets = 10;
  Twitter.queryTwitter(query, numOfTweets).then( (response, error) => {
    console.log("Response from Twitter: ", response);
    console.log("Pinging Watson...")
    Watson.queryWatson(response).then( (response, error) => {
      console.log("Response from Watson: ", response);
      console.log("Pinging Spotify...")
      Spotify.makePlaylist(response).then( (response, error) => {
        console.log("Response from Spotify:  ", response);
        respondTo.json({uris: response});
      })
    })
  });
}