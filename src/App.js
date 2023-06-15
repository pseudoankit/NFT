import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import MyCard from './component/MyCard';


function App() {

  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const {data} = await Axios.get('https://randomuser.me/api');
    setDetails(data.results[0])
  };

  useEffect(
    () => {
      fetchDetails();
    },
    []
  );

  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className='offset-md mt-4'>
          <MyCard details = {details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
