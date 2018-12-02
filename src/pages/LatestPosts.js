import React from 'react';
import PostFull from '../components/PostFull';
import PostShort from '../components/PostShort';
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
        let result;
        if (this.state.isLoaded && !this.state.error) {
            result = this.state.posts.map( post => (
                <PostShort key={post.id} {...post}/>
            ))
        } else {
            result = <h1>Loading...</h1>;
        }
        return (
            <React.Fragment>
                <h1 className="mb-5 text-center">Latest posts</h1>
                {result}
            </React.Fragment>
        )
    }
}

export default Posts;