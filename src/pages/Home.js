import React from 'react';
import Jubmotron from '../components/Jumbotron';
import Articles from '../components/Articles';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            articles: [],
        }

        fetch('https://jsonplaceholder.typicode.com/posts')
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    articles: response,
                    isLoaded: true,
                })
            })
    }

    render() {
        return (
            <main>
                <Jubmotron />
                <Articles articles={this.state.articles}/>
            </main>
        )
    }
}

export default Home;