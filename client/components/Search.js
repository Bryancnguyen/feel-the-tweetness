import React from 'react';
import { Link } from 'react-router';
import Tweet from './Tweet';

const Search = React.createClass({

  handleSubmit(e) {
    this.setState({value: e.target.value});
    // call backend function pass
    console.log(this);
  },
  render() {
    const {tweet} = 'hi';
    return (
      <div className="search-bar center-align">
           <div className="row">
               <div className="col s12 m12 l8 offset-l2 left-align">
                   <div className="row">
                       <div className="input-field col s12">
                           <i className="material-icons prefix"></i>
                           <input value={tweet} type="text" id="autocomplete-input" placeholder="search a hashtag and start feeling" className="autocomplete"/>
                       </div>
                   </div>
               </div>
               <div className="row">
                 <div className="click-button">
                  <a className="waves-effect waves-light btn-large" onClick={this.handleSubmit.bind(this)}>Start To Feel</a>
                 </div>
               </div>
           </div>
       <div className="plane1">
           <div className="emoji1a"></div>
       </div>
   <div className="result-box">
  </div>
  <Tweet tweet={tweet} {...this.props} />

  </div>
    )
  }
});

export default Search;
