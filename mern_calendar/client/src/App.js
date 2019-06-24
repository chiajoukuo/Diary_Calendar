import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import Calendar from './container/Calendar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <Calendar />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
