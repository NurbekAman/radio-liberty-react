import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

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

  handleClick = () => {
    const { value } = this.state;

    const { dispatch } = this.props;

    dispatch({
      type: actionMap.ADD_TAG,
      payload: { tag: { value, id: value + Math.random() } },
    });

    addTagToURL(value);
  }

  render() {
    return (
      <div className={blockName}>
        <div className={`${blockName}__list`}>
          <input
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
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default connect()(TagControl);