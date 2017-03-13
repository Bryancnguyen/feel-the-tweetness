import React from 'react';
import Sample from './Sample';
import Comments from './Test';

class Tweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      twitterQuery: "bla"
    }
  }

  componentWillReceiveProps() {
    // console.log(this.props.query);
    // if (this.props.query.length > 0) this.setState({twitterQuery: this.props.query});
    document.getElementsByClassName("tweets")[0].innerHTML = '<div id="twitterTimeline"></div>';

    twttr.widgets.createTimeline(
    {
      sourceType: 'url',
      url: `https://twitter.com/${this.props.query}`
    },
      document.getElementById('twitterTimeline'),
      {
        height: 380,
        width: 400
      }
    );
  }

  componentWillUpdate() {
  }

  render() {

    return(
      <div className="tweets">

      </div>
    );
 }

}

export default Tweets;
