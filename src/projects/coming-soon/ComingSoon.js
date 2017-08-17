import React, { Component } from 'react';
import './ComingSoon.css';

class ComingSoon extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="ComingSoon">
        Coming soon.
      </div>
    );
  }
}

export default ComingSoon;
