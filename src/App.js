import React from 'react';
import {Tab,Row,Col,Nav} from 'react-bootstrap';
import './App.css';

const Content = ({msg})=>{
    return<div>{msg}</div>
}

function App() {
  return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item><Nav.Link eventKey="first">Tab 1</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="second">Tab 2</Nav.Link></Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"><Content msg={"hello....ididfhih."} /></Tab.Pane>
              <Tab.Pane eventKey="second"><Content msg={"hello....."} /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  );
}

export default App;
