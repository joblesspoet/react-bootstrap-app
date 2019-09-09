import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './Routes';
const { store } = configureStore();


class App extends Component {
  render() {
    return (
          <React.Suspense fallback="<div>Please Wait.....</div>">
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                  <Routes />
                {/* </PersistGate> */}
            </Provider>
          </React.Suspense>
      );
  }
}

export default App;
