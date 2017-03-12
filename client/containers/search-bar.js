import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTweet } from '../actions/actionCreators';
import { Link } from 'react-router';
import Tweet from './Tweet';



class SearchBar extends Component({
  constructor(props){
    super(props);

    this.state = { value: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();

    //go get some weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' })
  }

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
                             <div className="click-button">
                             <Link to="/feeltweet"><a className="waves-effect waves-light btn-large" onClick={this.handleSubmit.bind(this)}>Start To Feel</a></Link>
                             </div>
                           </div>
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



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTweet }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
