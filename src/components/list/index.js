import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item';
import EmptyInput from '../empty-input';
import './index.css';

export default class List extends React.PureComponent {
   
    static defaultProps = {
        list: []
    }

    handleListChange = () => {
        
    }
   
    render() {
        console.log(this.props, 'list')
        const prosOrCons = this.props.store[this.props.name];

        return (
          <div>
            <ol>
                {
                  prosOrCons.map(listItem => (
                     <ListItem
                      key={listItem.id}
                      text={this.props.text}
                      onInput={this.handleListChange}
                     />
                  ))
                }
                {console.log(this.props, '09876')}
               { prosOrCons &&
                <EmptyInput
                    focus={true}
                    type={this.props.name}
                    addText={this.props.addText}
                />
                 }
            </ol>
          </div>
        )
    }
}

// List.propTypes = {
//     ListItem: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired
//       }).isRequired
//     ).isRequired
//   };