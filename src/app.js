import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Weather from './components/Weather';
import DesktopCapture from './components/DesktopCapture';


function render() {
  ReactDOM.render(
  <>
    {/* <Weather /> */}
    <DesktopCapture />
  </>, 
  document.getElementById('root')
  );
}

render();