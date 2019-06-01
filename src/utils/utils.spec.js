import { removeTag, getTagsFromURL, getBaseURL } from './href-helper';

describe('HrefHelper', () => {
  global.window = Object.create(window);
  const baseURl = 'http://google.com#tags=blue,red,white'
  Object.defineProperty(window, 'location', {
    value: {
      href: baseURl,
    }
  });

  it('should correctly get tags from url', () => {
    expect(getTagsFromURL()).toMatchObject(['blue', 'red', 'white']);
  });

  it('should correctly remove tag from url', () => {
    removeTag('red')
    expect(window.location.href).toEqual('http://google.com#tags=blue,white');
  });

  it('should correctly get base url', () => {
    expect(getBaseURL()).toEqual('http://google.com#tags=');
  });
});