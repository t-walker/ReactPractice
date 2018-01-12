import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <tr className="Students">
        <td>{this.props.name}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

export default Students;
