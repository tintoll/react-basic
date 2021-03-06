import React, { Component } from 'react';

class ContactRemover extends Component {
  handleClick(){
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Remove selected contact
      </button>
    );
  }
}

export default ContactRemover;