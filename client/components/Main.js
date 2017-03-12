import React from 'react';
import { Link } from 'react-router';
import Background from './Background';
import Search from './Search';
import Tweets from './Tweets';
import ReactDOM from 'react-dom';
import Emoji from './Emoji';

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


           {React.cloneElement({...this.props}.children, {...this.props}, {...this.props})}
           <Emoji />
     </div>
    )
  }
});

ReactDOM.render(
  <Main />, document.getElementById('root')
);
export default Main;
