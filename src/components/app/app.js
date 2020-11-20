import React, { useState } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, HousesPage, BooksPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';


const App = () => {

    const [showRandomChar, toogleShowRandowChar] = useState(true);

    const char = showRandomChar ? <RandomChar /> : null;

    return (
        <Router>
            <div className = 'app'> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <button 
                            className="toggle-btn"
                            onClick={() => toogleShowRandowChar(!showRandomChar)}>Toggle random character</button>
                    </Col>
                </Row>
                <Route path = '/characters' component = {CharacterPage} />
                <Route path = '/houses' component = {BooksPage} />
                <Route path = '/books' component = {HousesPage} />
            </Container>
        </div>
        </Router>
    );
};

export default App;