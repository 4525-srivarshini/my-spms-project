import React, { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../stylesheets/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Navbar, Fade, Button, ListGroup, Badge } from 'react-bootstrap';
import { UserContext } from '../App';
import MainNavbar from './MainNavbar';
import Signup from './Signup';
import Project from './Projects';

const Home = () => {
  const { state } = useContext(UserContext);

  return (
    <>
      {state ? (
        <Container className="background " fluid>
          <MainNavbar />
        </Container>
      ) : (
        <Container className="background2 " fluid>
          <Signup />
          {/* <h1>For creating / managing teams please<NavLink to="/login" >Login</NavLink></h1> */}
        </Container>
      )}
    </>
  );
};

export default Home;
