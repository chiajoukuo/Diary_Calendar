import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import EventList from './component/EventList';
import EventModal from './component/EventModal';
import DiaryList from './component/DiaryList';
import CommentModal from './component/CommentModal';
import ImageModal from './component/ImageModal';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <EventModal />
          <CommentModal />
          <ImageModal />
          <DiaryList />
          <EventList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
