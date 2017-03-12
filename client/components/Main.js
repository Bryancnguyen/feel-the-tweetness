import React from 'react';
import { Link } from 'react-router';
import Background from './Background';
import Search from './Search';
import Tweets from './Tweets';


const Main = React.createClass({
  render() {
    return (
      <div className="content">
      <Background/>
            <h4>
                <Link to="/"><span data-shadow-text="FEEL THE TWEET">FEEL THE TWEET</span></Link>
            </h4>
           <Search/>
           <Tweets/>

     </div>
    )
  }
});

export default Main;
