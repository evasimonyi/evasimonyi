import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from './first-component';
import SecondComponent from './second-component';

let element = <SecondComponent items={['a', 'b', 'c']} />;

ReactDOM.render(element, document.getElementById('react-container'));
