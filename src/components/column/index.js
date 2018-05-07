import React from 'react';
import List from '../list';
import './index.css';

export default class Column extends React.PureComponent {
    render() {
      const { type } = this.props;
        return (
            <div className={type.toLowerCase()}>
                <List type={type} />
            </div>
        )
    }
}
