import React, { Component } from 'react';

import Student from './student'

class Students extends Component {
  constructor() {
    super() 

    this.state = { students: [
      {name: "Tyler", grade: "F"},
      {name: "Jim", grade: "A"},
      {name: "James", grade: "B"},
      {name: "Jac", grade: "D"}]
    };
  }

  renderStudents() {
    let students = [];

    for(let i=0; i < this.state.students.length; i++) {
      students.push(<Student name={this.state.students[i].name} grade={this.state.students[i].grade} />)
    }

    return students;
  }

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
            {this.renderStudents()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Students;
