import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tag from './tag';

import { actionMap } from '../../reducers/tag-list';

import { getTagsFromURL, removeTag } from '../../utils/href-helper';

import './tag-list.scss';

const blockName = 'tag-list';

class TagList extends Component {
  static propTypes = {
    tags: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  };

  static defaultProps = {
    tags: [],
  };

  state = {
    tags: [],
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const { tags } = nextProps;

    this.setState({ tags });
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.addTagList);

    this.addTagList();
  }

  addTagList = () => {
    const { dispatch } = this.props;

    const tags = getTagsFromURL().reduce((tags, value, index) => {
      return [ ...tags, {id: value + index, value } ]
    }, []);

    this.setState({ tags });

    dispatch({
      type: actionMap.SET_TAGS,
      payload: { tags },
    })
  }

  handleTagClick = e => {
    e.preventDefault();

    const { currentTarget } = e;

    const { text, dataset } = currentTarget;
    const { id } = dataset;

    const { tags } = this.state;
    const { dispatch } = this.props;

    const newTags = tags.filter(x => x.id !== id);

    this.setState({
      tags: newTags,
    });

    dispatch({
      type: actionMap.DEL_TAG,
      payload: { tag: { value: text, id } },
    });

    removeTag(newTags);
  }

  renderTag = tag => {
    const { value, id } = tag;

    return (
      <Tag
        key={id}
        index={id}
        title={value}
        onClick={this.handleTagClick}
      />
    )
  }

  render() {
    const { tags } = this.state;

    return (
      <div className={blockName}>
        <div className={`${blockName}__container`}>
          <h2 className={`${blockName}__title`}>
            Tags
          </h2>
          <ul className={`${blockName}__list`}>
            {tags.map(this.renderTag)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { reducerTagList } = state;
  const { tags } = reducerTagList;

  return {
    tags,
  }
}

export default connect(mapStateToProps)(TagList);