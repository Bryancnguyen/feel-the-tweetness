
export const FETCH_TWEET = 'FETCH_TWEET';



// add tweet
export function fetchTweet(tweet) {
  return {
    type: 'FETCH_TWEET',
    tweet
  }
}
