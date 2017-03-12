import React from 'react';
import Sample from './Sample';
import Comments from './Test';
const Single = React.createClass({
  render() {

    return(
      <div className="tweet">
        <h1>{ this.props.tweet }</h1>
        {console.log(this.props.tweet)}
      </div>
    );
 }
});

export default Single;
