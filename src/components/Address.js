// Component Code Goes Here
import React from 'react';

class Address extends React.Component {
  render() {
    return (
      <div className="address">
        <p>Street: {this.props.street},</p>
        <p>City: {this.props.city}</p>
      </div>
    );
  }
}

export default Address;
