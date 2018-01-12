import React, { Component } from 'react';

import Student from './student'

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <h1>Students</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <Student name="Tyler" grade="F" />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Students;
