import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Nav } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import Calendar from './container/Calendar';
import DiaryRender from './component/Diary/DiaryRender';
import CommentModal from './component/CommentModal';
import ImageModal from './component/ImageModal';
import DiaryModal from './component/DiaryModal';

class App extends Component {
  app = () => {
    return (
      <section className="jumbotron-header mb-3 mt-2">
        <h1 className="jumbotron-heading display-4 text-center">Calendar</h1>
        <p className="lead text-center">Manage your events</p>
        <Container>
          <Nav tabs className="justify-content-center mb-3"></Nav>
          <Calendar />
        </Container >
      </section>
    )
  }

  HomePage = () => {
    return (
      <section className="jumbotron-header mb-3 mt-2">
        <h1 className="jumbotron-heading display-4 text-center">HomePage</h1>
        <p className="lead text-center">Just a TEST HOMEPAGE</p>
      </section>
    )
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
            <Switch>
              <Route exact path="/app" component={this.app} />
              <Redirect from="/diary/home" to="/diary" />
              <Route exact path="/diary" component={this.Diary} />
              <Route path="/diary/:id?" component={DiaryRender} />
              <Route exact path="/" component={this.HomePage} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
