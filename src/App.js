import React from 'react';
import BookAService from './components/BookAService';
import Navbar from './components/Navbar';
import {Container,Row} from 'react-bootstrap';

import './App.css';

const App = (props)=> {
    return <Container>
            <Navbar />
            <Row className="justify-content-md-center"><BookAService /></Row>
          </Container>
}

export default App;
