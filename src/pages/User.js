import React from 'react';
import dataAPI from '../middleware/dataAPI';
import PostShort from '../components/PostShort';
import { Row, Col } from 'reactstrap';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userPosts: [],
        }

        // console.log(this);

        dataAPI.getPostByUser(this.props.match.params.userId)
            .then(userPosts => {
                // let userPosts = posts.filter(post => (this.props.match.params.userId == post.userId))
                this.setState({userPosts});
            })

    }

    render() {
        var result;
        result = this.state.userPosts.map(post => (
            <Col key={post.id}>
                <PostShort {...post} />
                <hr />
            </Col>
        ))
        return(
            <>
                {result}
            </>
        )
    }
}

export default User;