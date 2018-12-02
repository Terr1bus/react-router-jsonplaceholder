import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
    Row,
    Col,
} from 'reactstrap';
import PostFull from '../components/PostFull';
import Comment from '../components/Comment';
import dataAPI from '../middleware/dataAPI';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            postOwner: {},
            comments: [],
            isLoaded: false,
            error: null,
        }

        dataAPI.getPost(this.props.match.params.postId)
            .catch(error => this.setState({error}))
            .then(post => {
                this.setState({
                    post,
                    isLoaded: (this.state.post && this.state.comments && this.state.postOwner) ? true : false,
                });
                return post;
            })
            .then(post => dataAPI.getUser(post.userId))
            .then(postOwner => this.setState({
                postOwner,
                isLoaded: (this.state.post && this.state.comments && this.state.postOwner) ? true : false,
            }));

        dataAPI.getPostComments(this.props.match.params.postId)
            .then(comments => {
                this.setState({
                    comments,
                    isLoaded: (this.state.post && this.state.comments && this.state.postOwner) ? true : false,
                });
            })
    }

    render() {
        // console.log(this.state.postOwner);
        
        const comments = this.state.comments.map(comment => (
            <Comment {...comment} key={comment.id} />
        ));

        let result;
        if (this.state.isLoaded) {
            result = (
                <React.Fragment>
                    <PostFull 
                        post={this.state.post} 
                        commentsCount={this.state.comments.length}
                        user={this.state.postOwner}
                    />
                    <hr />
                    {comments}
                </React.Fragment>
            )
        } else if (this.state.error) {
            result = <React.Fragment>{JSON.stringify(this.state.error)}</React.Fragment>
        } else {
            result = <h1>Post page loading...</h1>
        }
        return (
            <React.Fragment>
                {result}
            </React.Fragment>
        )
    }
}

Post.defaultProps = {
    title: "Post title",
    body: "Post body",
}

export default Post;