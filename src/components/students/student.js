import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <h1>{this.props.name}</h1>
        <table>
            <thead>
                <tr>
                    <th>GPA</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Students;
