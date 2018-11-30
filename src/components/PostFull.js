import React from 'react';
import { 
    Row,
    Col,
 } from 'reactstrap';
 import { Route, Link } from 'react-router-dom';
 import dataAPI from '../middleware/dataAPI';
 import Comment from '../components/Comment';

class PostFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            comments: [],
        }
        
        dataAPI.getUser(this.props.userId)
            .then(user => {
                this.setState({
                    user,
                })
        })

        dataAPI.getPostComments(this.props.id)
            .then(comments => {
                this.setState({
                    comments,
                })
            })

    }
    
    render() {
        // console.log(this);

        const className = 'text-center ';
        if (this.props.className) {
            className += this.props.className;
        }

        return (
            <main className={className}>
                <Link to={`/posts/${this.props.id}`}><h4>{this.props.title}</h4></Link>
                <p>{this.props.body}</p>
                <Row>
                    <Col md={{size: 2}}>
                        <Link to={`/user/${this.props.userId}`}>{this.state.user.name}</Link>
                    </Col>
                    <Col md={{size: 2, offset: 8}}>
                        <p>Comments: {this.state.comments.length}</p>
                    </Col>
                </Row>
            </main>
        )
    }
}

PostFull.defaultProps = {
    title: "PostFull title",
    body: "PostFull text"
}

export default PostFull;