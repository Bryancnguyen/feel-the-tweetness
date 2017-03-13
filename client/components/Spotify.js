import React from 'react';

const Spotify = ({tracks}) => {
  let randomTrack = Math.ceil((tracks.length-1)*Math.random());
  console.log(randomTrack);
  const track = tracks[randomTrack];
  console.log('tracks are: ', tracks);

  return (
    <div className="spotify-player">
      <iframe 
      src={`https://embed.spotify.com/?uri=${track}`}
      width="300" height="380"
      frameborder="0" allowtransparency="true"></iframe>
    </div>
  )
}

export default Spotify;