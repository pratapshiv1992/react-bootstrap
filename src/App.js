import React from 'react';
import BookAService from './components/BookAService';
import {Container,Row} from 'react-bootstrap';

import './App.css';

const App = (props)=> {
    return <Container>
                <Row className="justify-content-md-center">
                    <div>I am top nav</div>
                    <BookAService />
                </Row>
            </Container>
}

export default App;
