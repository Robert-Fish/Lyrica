import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?page=1&page_size=10&f_has_lyrics=1&q_track=${
          this.state.trackTitle
        }&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });

        this.setState({ track_list: "" });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4 search-card">
              <h1 className="display-4 text-center search-text">
                <i
                  className="fas fa-music"
                  style={{
                    fontSize: "3rem",
                    paddingRight: "15px"
                  }}
                />
                Search
              </h1>
              <p className="lead text-center search-text">
                Get the lyrics for any song
              </p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group form-search">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search For A Track..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-lg btn-block mb-5  btn-search"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;
