import React, {Component} from 'react';

import Hero from '../hero';
import TagList from '../tag-list';
import TagControl from '../tag-control';

import './main.scss';

const blockName = 'main';

class Index extends Component {
 render() {
  return (
    <div className={blockName}>
      <Hero />
      <TagList />
      <TagControl />
    </div>
  );
 }
}

export default Index;