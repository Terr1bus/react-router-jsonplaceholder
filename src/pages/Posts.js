import React from 'react';
import PostFull from '../components/PostFull';
import dataAPI from '../middleware/dataAPI';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false,
            error: null
        };

        dataAPI.getAllPosts()
            .then(posts => {
                // console.log(response);
                this.setState({
                    posts,
                    isLoaded: true,
                });    
            })
    }

    componentDidMount() {
    }

    render() {
        // console.log(this.state.posts);
        var result;
        if (this.state.isLoaded && !this.state.error) {
            result = this.state.posts.map( post => (
                <PostFull key={post.id} {...post}/>
            ))
        } else {
            result = <h1>Loading...</h1>;
        }
        return (
            <>
                {result}
            </>
        )
    }
}

export default Posts;