import CONSTANTS from '../components/tag-list/constant';

/**
 * get tags from url
 * and return array of tags
 *
 * @return {string[]|Array}
 */
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

/**
 * add tag to URL
 *
 * @param value = tag
 */
export function addTagToURL(value) {
  const tagParts = getTagsFromURL();

  if (window.location.href.includes(CONSTANTS.TAG_HREF)) {
    window.location.href += tagParts.length > 0 ? `,${value}` : value;
  } else {
    window.location.href = `${CONSTANTS.TAG_HREF}=${value}`;
  }
}

function removeTagFromList(text, tags) {
  if (tags && tags.length > 0) {
    const index = tags.lastIndexOf(text);

    delete tags[index];

    return tags.filter(x=>x).join(',');
  }

  return '';
}

function setURLWithTag(tagsPart) {
  window.location.href = getBaseURL() + tagsPart;
}

/**
 * remove tag from URL
 *
 * @param tag - string
 */
export function removeTag(tagList) {
  const tags = tagList.map(x => x.value).join(',');

  setURLWithTag(tags);
}

