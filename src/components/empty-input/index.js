import React from 'react';

export default class EmptyInput extends React.PureComponent {

    state = {
        value: ''
    }

    onChange = (e) => {
        const value = e.target.value;
        this.props.addText(this.props.type, value);
        this.setState({ value })
    }

    render(){
        return (
            <li>
                <input
                    type="text"
                    value={this.state.value}
                    focus={this.props.focus}
                    onChange={this.onChange}
                />
             </li>
        )
    }
}