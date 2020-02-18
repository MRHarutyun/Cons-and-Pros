import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from '../list-item';
import { createItem } from '../../utils';
import { addText, editText, deleteText } from '../../actions/inputActions';

import './index.css';

const mapStateToProps = state => {
  return {
    store: state.inputReducer
  }
}

const mapDespatchToProps = dispatch => {
  return {
    addToList: (textType, text) => {
      dispatch(addText(textType, createItem(text)))
    },
    updateList: (textType, text) => {
      dispatch(editText(textType, text))
    },
    deleteList: (textType, text) => {
      dispatch(deleteText(textType, text))
    }
  }
}

class List extends React.PureComponent {

    constructor(props) {
      super(props);
      const { addToList } = props;
      if (props.type === 'PROS') {
        addToList('PROS', '');
      } else {
        addToList('CONS', '');
      }

    }

    onListItemChange = (item) => {
        const textType = this.props.type;
        let changedItem = this.props.store[textType];

        if(!item.text) {
            this.props.deleteList(textType, item.id);
        } else {
            this.props.updateList(textType, item);

            if (item.id === changedItem[changedItem.length - 1].id && item.text !== '') {
                this.props.addToList(textType, '');
            }
        }
    }

    render() {
        const prosorCons = this.props.store[this.props.type];
        return (
          <div className='container'>
            <ol>
                {
                  prosorCons.map((listItem, index) => (
                     <ListItem
                      key={listItem.id}
                      id={listItem.id}
                      value={this.props.text}
                      onChange={this.onListItemChange}
                     />
                  ))
                }
            </ol>
          </div>
        )
    }
}


const ListContainer = connect(mapStateToProps, mapDespatchToProps)(List);

export default ListContainer;

// List.propTypes = {
//     ListItem: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired
//       }).isRequired
//     ).isRequired
//   };
