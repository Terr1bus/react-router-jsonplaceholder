import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import {
    Container,
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';

class App extends React.Component {
    

    render() {
        return (
            <Router>
                <Container>
                    <Header />
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contacts} />
                    <hr />
                    &copy 2018
                </Container>
            </Router>
        );
    }
}

export default App;