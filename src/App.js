import React from "react";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import Main from "../src/components/MainComponent";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
