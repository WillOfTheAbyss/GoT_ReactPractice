import React, { useState } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, HousesPage, BooksPage, BooksItems} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from '../redirect/';
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
                <Switch>
                    <Route path = '/' exact>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    className="toggle-btn"
                                    onClick={() => toogleShowRandowChar(!showRandomChar)}>Toggle random character</button>
                            </Col>
                        </Row>
                    </Route>
                    <Route path = '/characters' component = {CharacterPage} exact/>
                    <Route path = '/houses' component = {HousesPage} exact/>
                    <Route path = '/books' component = {BooksPage} exact/>
                    <Route path='/books/:id' render={({match}) => {
                                console.log(match);
                                const {id} = match.params;
                            return <BooksItems bookId={id}/>}}
                    />
                    <Route path="*" >
                        <NoMatch />
                    </Route>
                </Switch> 
            </Container>
        </div>
        </Router>
    );
};

export default App;