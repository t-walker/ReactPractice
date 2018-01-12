import React, { Component } from 'react';

class Assignments extends Component {
  render() {
    return (
      <div className="Assignments">
        <h1>Assignments</h1>
       
        <h2>All Assignments</h2>
        <ul>
          <li>Assignment A</li>
          <li>Assignment B</li>
          <li>Assignment C</li>
        </ul>

        <h2>Upcoming</h2>

        <h3>Tomorrow</h3>
        <ul>
          <li>Assignment A</li>
        </ul>

        <h3>This Week</h3>
        <ul>
          <li>Assignment B</li>
          <li>Assignment C</li>
        </ul>


      </div>
    );
  }
}

export default Assignments;
