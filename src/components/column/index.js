import React from 'react';
import List from '../list';
import './index.css';

export default class Column extends React.PureComponent {

    render() {
        console.log(this.props, 'column');
        return (
            <div className={this.props.name.toLowerCase()}>
                <List
                    {...this.props}
                />
            </div>
        )
    }
}