import React from 'react';
import PostShort from './PostShort';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

const Posts = (props) => {
        const posts = props.posts.slice(0, 6).map((post, index) => (
            <PostShort className="col-md-4" {...post} key={index}/>
        ))
        return (
            <>
                <Link to="/posts"><h2 className="text-center">Latest posts</h2></Link>
                <Row>
                    {posts}
                </Row>
            </>
        )
    }

export default Posts;