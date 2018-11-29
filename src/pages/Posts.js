import React from 'react';
import PostShort from '../components/PostShort';
import dataAPI from '../middleware/dataAPI';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false,
            error: null
        };

        const posts = await dataAPI.getPosts();
        this.setState({
            posts: posts,
        })
    }

    render() {
        return (
            <h1>Post</h1>
        )
    }
}

export default Posts;