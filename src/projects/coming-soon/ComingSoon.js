import React, { Component } from 'react';
import Arrow from '../arrow/Arrow';
import './ComingSoon.css';

class ComingSoon extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <div className="ComingSoon">
        <Arrow />
        Coming soon.
      </div>
    );
  }
}

export default ComingSoon;
