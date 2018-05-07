import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class ListItem extends React.PureComponent{ 
    render() {
       return (
          <li>
            <input
             onInput={this.props.onInput}
             type="text"
             value={this.props.text}
            />
          </li>
      );
  }
}

  // ListItem.propTypes = {
  //   onInput: PropTypes.func.isRequired,
  //   text: PropTypes.string.isRequired
  // }
  
