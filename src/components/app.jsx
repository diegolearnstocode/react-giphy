import React, { Component } from 'react';
import giphy from 'giphy-api';


import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifID: ""
    };
  }

  search = (query) => {
    giphy("ZxfyIo4hG3O5GYcolR6LpT0aBO82WZ5B").search({
      q: query,
      limit: 15
    }, (err, res) => {
      this.setState({
        gifs: res.data,
        selectedGifID: res.data[0].id
      });
    });
  }




  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchGifs={this.search} />
          <div className="selected-gif">
            <Gif gif={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
