import React, { Component } from 'react';

import SortableListComponent from './sortableList';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <SortableListComponent />
      </div>
    );
  }
};