import React from 'react';
import Project from '../../projects/Project';
import Arrow from '../arrow/Arrow';
import './ComingSoon.css';

class ComingSoon extends Project {

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
