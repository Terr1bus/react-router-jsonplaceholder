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
            // users: [],
            comments: [],
            isLoading: false,
            error: null,
        }

        dataAPI.getPost(this.props.match.params.postId)
            .catch(error => this.setState({error}))
            .then(post => this.setState({
                post,
                isLoading: !!this.state.post && !!this.state.comments,
            }))

        dataAPI.getPostComments(this.props.match.params.postId)
            .then(comments => {
                // console.log(comments);
                this.setState({
                    comments,
                    isLoading: !!this.state.post && !!this.state.comments,
                })
            })

        }
    render() {
        // console.log(this);
        
        const comments = this.state.comments.map(comment => (
            <Comment {...comment} key={comment.id} />
        ));

        var result;
        if (this.state.isLoading) {
            result = (
                <>
                    <PostFull {...this.state.post} />
                    {comments}
                </>
            )
        } else if (this.state.error) {
            result = <>{JSON.stringify(this.state.error)}</>
        } else {
            result = <h1>Loading...</h1>
        }
        return (
            <>
                {result}
            </>
        )
    }
}

Post.defaultProps = {
    title: "Post title",
    body: "Post body",
}

export default Post;