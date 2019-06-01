import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid/v4';

import { actionMap } from '../../reducers/tag-list';

import { addTagToURL } from '../../utils/href-helper';

import './tag-control.scss';

const blockName = 'tag-control';

class TagControl extends PureComponent {
  state = {
    value: '',
  };

  handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    this.setState({ value });
  }

  handleClick = e => {
    e.preventDefault();

    const { value } = this.state;

    const { dispatch } = this.props;

    if (value) {
      dispatch({
        type: actionMap.ADD_TAG,
        payload: {tag: {value, id: uuid()}},
      });

      this.setState({value: ''})

      addTagToURL(value);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className={blockName}>
        <form onSubmit={this.handleClick}>
          <div className={`${blockName}__list`}>
            <input
              value={value}
              placeholder="Enter tag"
              type="text"
              className={`${blockName}__input`}
              name="tag-input"
              onChange={this.handleChange}
            />
            <input
              type="button"
              className={`${blockName}__button`}
              value="add tag"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(TagControl);