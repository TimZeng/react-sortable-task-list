import React, { Component } from 'react';

import SortableListComponent from './sortableList';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h5>Sortable Task List - Tim Zeng - ReactJS & Redux</h5>
        </header>
        <div className='container content'>
          <SortableListComponent />
        </div>
      </div>
    );
  }
};