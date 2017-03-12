import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className="content">
            <h4>
                <Link to="/"><span data-shadow-text="FEEL THE TWEET">FEEL THE TWEET</span></Link>
            </h4>
           {React.cloneElement({...this.props}.children, {...this.props}, {...this.props})}
     </div>
    )
  }
});

export default Main;
