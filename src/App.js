import React from 'react';
import dataAPI from './middleware/dataAPI';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Posts from './pages/Posts';
import Post from './pages/Post';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import {
    Container,
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
        }

        dataAPI.getAllPosts()
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
            .then(response => {
                this.setState({
                    posts: response,
                    isLoaded: true,
                })
            })
    }

    render() {
        return (
            <Router>
                <Container>
                    <Header />
                    <hr />
                    <Route exact
                        path="/"
                        render={props => <Home {...props} posts={this.state.posts} />} 
                    />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" component={Contacts} />
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:postId" component={Post} />
                    <Route path="/user/:userId" component={User} />
                    <hr />
                    &copy 2018
                </Container>
            </Router>
        );
    }
}

export default App;