import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class ListItem extends React.PureComponent{

    onChange = (event) => {
      const { onChange, id } = this.props;
      onChange && onChange({ id, text: event.target.value })
    }

    render() {
       return (
          <li>
            <input
             autoFocus={this.props.autofocus}
             type="text"
             value={this.props.value}
             onChange={this.onChange}
            />
          </li>
      );
  }
}

  ListItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }
