const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const { sortBy } = require('lodash/collection');
const { watsonKeys } = require('./apiKeys');

const extractPersonalityNeeds = function(body) {
  // Extracts and sorts the needs based on the raw_score
  return sortBy(body.needs, 'raw_score').reverse();
}

exports.queryWatson = function(body) {
  let personalityInsights = new PersonalityInsightsV3({
    "url": 'https://gateway.watsonplatform.net/personality-insights/api',
    "username": watsonKeys.username,
    "password": watsonKeys.password,
    "version_date": '2016-10-19'
  });

  let contentItems = [];

  body.forEach( tweet => {
    contentItems.push({
      "language" : "en",
      "content" : tweet,
      "contenttype" : "application/json"
    })
  });

  let params = {
    content_items: [{
        "contentItems": contentItems
    }],
    consumption_preferences: true,
    raw_scores: true,
    headers: {
      'accept-language': 'en',
      "Content-Type": "text/plain;charset=utf-8"
    }
  };

  let personalityNeeds;

  return new Promise(function(resolve, reject) {
    personalityInsights.profile(params, (error, response) => {
      if(error) reject(error);
      resolve(extractPersonalityNeeds(response));
    })
  })
}