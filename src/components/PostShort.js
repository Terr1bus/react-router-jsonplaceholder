import React from 'react';
import { 
    Col,
 } from 'reactstrap';
 import { Route, Link } from 'react-router-dom';

const PostShort = (props) => {
    // console.log(props);
    return (
        <Col md={4} className="text-center">
            <Link to={`/posts/${props.id}`}><h4>{props.title}</h4></Link>
            <p>{props.body}</p>
        </Col>
    )
}

PostShort.defaultProps = {
    title: "PostShort title",
    body: "PostShort text"
}

export default PostShort;