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

  render() {
    return (
      <div className="Grades">
        <h1>Grades</h1>
        <h2>All Grades</h2>
        <table className="table">
          <thead>
            <th>Grade</th>
            <th>Count</th>
          </thead>
          <tbody>
            <Grade grade={"A"} count={7} />
            <Grade grade={"B"} count={7} />
            <Grade grade={"C"} count={7} />
            <Grade grade={"D"} count={7} />
            <Grade grade={"F"} count={7} />
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
