import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            isLoading: false,
            error: null,
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
            .catch(error => this.setState({error}))
            .then(res => res.json())
            .then(res => this.setState({
                post: res,
                isLoading: true,
            }))
    }
    render() {
        // console.log(this);
        if (this.state.isLoading) {
            return (
                <main>
                    <h2>{this.state.post.title}</h2>
                    <p>{this.state.post.body}</p>
                </main>
            )
        } else if (this.state.error) {
            return (
                <div>{JSON.stringify(error)}</div>
            )
        } else return <h1>Loading</h1>
    }
}

Post.defaultProps = {
    title: "Post title",
    body: "Post body",
}

export default Post;