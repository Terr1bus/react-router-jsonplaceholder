import React from 'react';
import PostShort from './PostShort';

const Posts = (props) => {
        const posts = props.posts.slice(0, 6).map((post, index) => (
            <PostShort {...post} key={index}/>
        ))
        return (
            <main>
                <Link to="/posts"><h2 className="text-center">Latest posts</h2></Link>
                <Row>
                    {posts}
                </Row>
            </main>
        )
    }

export default Posts;