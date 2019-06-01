import compose from 'lodash/fp/compose';
import partial from 'lodash/fp/partial';

import CONSTANTS from '../components/tag-list/constant';

export function getTagsFromURL() {
  const matched  = window.location.href.match(/.+#tags=(.+)/);

  const tag = matched && matched[1];

  if (tag) {
    return tag.split(',');
  }

  return [];
}

export function getBaseURL() {
  const matchedTags = window.location.href.match(/.+#tags=/);

  return matchedTags && matchedTags[0];
}

export function addTagToURL(value) {
  const tagParts = getTagsFromURL();

  if (window.location.href.includes('#tags')) {
    window.location.href += tagParts.length > 0 ? `,${value}` : value;
  } else {
    window.location.href = `${CONSTANTS.TAG_HREF}=${value}`;
  }
}

function removeTagFromList(text, tags) {
  if (tags && tags.length > 0) {
    return tags.filter(x => x !== text ).join(',');
  }

  return '';
}

function setURLWithTag(tagsPart) {
  window.location.href = getBaseURL() + tagsPart;
}

export function removeTag(tag) {
  compose(
    setURLWithTag,
    partial(removeTagFromList, [tag]),
    getTagsFromURL,
  )();
}

