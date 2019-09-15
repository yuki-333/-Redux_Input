import React from "react";

import store　from "./containers/store"
import App from "./containers/App"

import { Provider } from "react-redux"

class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Home;