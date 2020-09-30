import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Vaughn McPherson',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Vaughn McPherson',
        subTitle: 'Full Stack Web Developer',
        text: 'Welcome to my portfolio page.',
        
      },
      about: {
        title: 'About Me',
       
      },
      portfolio: {
        title: 'Portfolio',
        text: 'Click to explore some highlights from my experience at UW!',
        
       
      },
      resume: {
        title: 'Resume',
       
      },
      contact: {
        title: 'Chat With Me',
        
      },


    }
  }
  render() {
  return (
    <Router>
      <Container className="p-0"fluid={true}>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Vaughn McPherson</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
              <Link className="nav-link" to="/resume">Resume</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

             
            </Nav>
            
          </Navbar.Collapse>

        </Navbar>

        < Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        < Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        < Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} text={this.state.portfolio.text}/>}/>
        < Route path="/resume" render={() => <ResumePage title={this.state.resume.title} />} />
        < Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          

        <Footer />
        

      </Container>


    </Router>
  );
}
}

export default App;
