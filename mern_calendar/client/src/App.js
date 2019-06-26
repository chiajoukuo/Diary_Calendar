import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'reactstrap';

import AppNavbar from './component/AppNavbar';
import DiaryRender from './component/Diary/DiaryRender';
import CommentModal from './component/CommentModal';
import ImageModal from './component/ImageModal';
import DiaryModal from './component/DiaryModal';
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';
import RegisterPage from './container/RegisterPage';
import CalendarPage from './container/CalendarPage';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  Diary = () => {
    return (
      <section className="jumbotron-header mb-3 mt-2">
        <h1 className="jumbotron-heading display-4 text-center">Diary Page</h1>
        <p className="lead text-center">Just a TEST Diary PAGE</p>
        <Container>
          <Row>
            <DiaryModal />
            <CommentModal />
            <ImageModal />
          </Row>
        </Container>
      </section>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/app" component={CalendarPage} />
              <Redirect from="/diary/home" to="/diary" />
              <Route exact path="/diary" component={this.Diary} />
              <Route path="/diary/:id?" component={DiaryRender} />
              <Route exact path="/user/login" component={LoginPage} />
              <Route exact path="/user/register" component={RegisterPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
