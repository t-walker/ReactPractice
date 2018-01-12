import React, { Component } from 'react';

class Grades extends Component {
  constructor() {
    super()

    this.state = {
      grades: [
        {grade: "A", count: 7},
        {grade: "B", count: 6},
        {grade: "C", count: 5},
        {grade: "D", count: 4},
        {grade: "F", count: 3}
      ]
    };
  }

  renderGrades() {
    let grades = [];

    for (let i=0; i < this.state.grades.length; i++) {
      grades.push(<Grade grade={this.state.grades[i].grade} count={this.state.grades[i].count} />);
    }

    return (grades);
  }

  render() {
    return (
      <div className="Grades">
        <h1>Grades</h1>
        <h2>All Grades</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {this.renderGrades()}
          </tbody>
        </table>
      </div>
    );
  }
}

class Grade extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <tr>
        <td>{this.props.grade}</td>
        <td>{this.props.count}</td>
      </tr>
    );
  }
}


export default Grades;
