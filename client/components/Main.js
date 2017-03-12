import React from 'react';
import { Link } from 'react-router';
import Search from './Search';
import ReactDOM from 'react-dom';

const Main = React.createClass({
  render() {
    return (
      <div className="content">
            <h4>
                <Link to="/"><span data-shadow-text="FEEL THE TWEET">FEEL THE TWEET</span></Link>
            </h4>
           <Search />
     </div>
    )
  }
});

ReactDOM.render(
  <Main />, document.getElementById('root')
);
export default Main;
