import React, { Component } from 'react';

import App from './app';

class SearchBar extends Component {
    handleUpdate = (event) => {
      console.log(event.target.value);
      return this.props.searchGifs(event.target.value);
    }

    render () {
      return (
        <input type="text" className="form-search form-control"
        onChange={this.handleUpdate}/>
      );
    }
}


export default SearchBar;
