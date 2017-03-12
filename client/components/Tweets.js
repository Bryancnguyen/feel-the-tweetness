import React from 'react';
import Sample from './Sample';
import Comments from './Test';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return(
      <div className="tweets">
        <a className="twitter-timeline"
          data-width="400"
          data-height="400"
          data-theme="light"
          href="https://twitter.com/TwitterDev/lists/national-parks">A Twitter List by TwitterDev</a>
      </div>
    );
 }

}

export default Tweets;
