import React from 'react';
import { Link } from 'react-router';
import Tweets from './Tweets';
import Emoji from './Emoji';
import Spotify from './Spotify';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            twitterQuery: "twitter",
            tracksUris: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({inputValue: e.target.value});
    }

  handleSubmit(e) {
      const receiveTracks = res => {this.setState({tracksUris: res.uris})};
      this.setState({twitterQuery: this.state.inputValue});
    $.ajax({
        method: "GET",
        url: `/feelit/${this.state.twitterQuery}`,
        success: receiveTracks,
        error: function(res) {alert("An error has occurred: " + res.status + " - " + res.statusText)}
    });
    
  }

  componentWillMount() {
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
                           <input value={this.state.inputValue} onChange={this.handleInputChange} type="text" id="autocomplete-input" placeholder="search a hashtag and start feeling" className="autocomplete"/>
                       </div>
                   </div>
               </div>
               <div className="row">
                 <div className="click-button">
                  <a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Start To Feel</a>
                 </div>
               </div>
           </div>
       <div className="plane1">
           <div className="emoji1a"></div>
       </div>
   <div className="result-box">
  </div>
    <div className="search-results">
        <Emoji />
        <Tweets query = {this.state.twitterQuery}/>
        <Spotify tracks = {this.state.tracksUris}/>
    </div>
  </div>
    )
  }
};

export default Search;
