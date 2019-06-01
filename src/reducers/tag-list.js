const name = 'tag-list';

const actionMap = {
  SET_TAGS: `${name}/set`,
  ADD_TAG: `${name}/add`,
  DEL_TAG: `${name}/delete`,
};

const STATE = {
  tags: [],
};

const reducer = (state=STATE, action) => {
  const { type, payload } = action;

  const { tags } = state;

  switch (type) {
    case actionMap.SET_TAGS: {
      const { tags } = payload;

      return {
        ...state,
        tags,
      }
    }
    case actionMap.ADD_TAG: {
      const { tag } = payload;

      return {
        ...state,
        tags: [...tags, tag],
      }
    }
    case actionMap.DEL_TAG: {
      const { tag } = payload;

      const { id } = tag;

      return {
        ...state,
        tags: tags.filter(item => item.id !== id),
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export {
  actionMap,
  reducer,
}
