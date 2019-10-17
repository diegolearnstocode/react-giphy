import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';


class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : 'unclicked'}
        onClick={ this.handleClick }>
        Hello, { this.props.name }
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Diego" />, root);
}

