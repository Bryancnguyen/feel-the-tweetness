const axios = require('axios');
const { map } = require('lodash/collection');

const querySpotify = function(query, numTracks) {

  const spotifyURL = `https://api.spotify.com/v1/search?type=track&limit=${numTracks}&q=${query}`;
  console.log(spotifyURL);
  return axios.get(spotifyURL);
}

const buildQuery = function(needs, queryOperator="OR") {
  return map(needs, 'name').join(`%20${queryOperator}%20`);
}

const getTracksURIs = function(body) {
  let uris = [];
  body.forEach( response => {
    response.data.tracks.items.forEach( t => uris.push(t.uri));
  });
  return uris;
}

exports.makePlaylist = function(personalityNeeds) {
  let playlist = [];
  let queries = [];

  //Builds promises from the top 5 needs
  let numTracks = 30;
  let promises = personalityNeeds.slice(0,5).map( needs => {
    let query = needs.name;
    numTracks -= 5;
    return querySpotify(query, numTracks);
  });

  return new Promise(function(resolve, reject) {
    Promise.all(promises).then( (response, error) => {
      if (error) reject(error);
      resolve(getTracksURIs(response));
    });

  })
}