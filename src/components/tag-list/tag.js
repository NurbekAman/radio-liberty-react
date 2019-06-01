import React from 'react';
import PropTypes from 'prop-types';

function Tag(props) {
  const { title, onClick, index } = props;

  return (
    <a
      href="#"
      onClick={onClick}
      data-id={index}
    >
      {title}
    </a>
  );
};

Tag.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.string,
};

export default Tag;