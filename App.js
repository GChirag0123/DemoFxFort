import * as React from 'react';

import MyStack from './src/root';
import {Provider} from 'react-redux';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

export default App;
