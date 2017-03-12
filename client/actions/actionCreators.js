
// add tweet
export function addTweet(tweet) {
  return {
    type: 'SEND_TWEET',
    tweet
  }
}
