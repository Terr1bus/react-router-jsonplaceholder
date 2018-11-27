import React from 'react';
import {
    Col,
} from 'reactstrap';

class Article extends React.Component {
    render() {
        console.log(this);
        return (
            <Col md={4} className="text-center">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </Col>
        )
    }
}

Article.defaultProps = {
    title: "Article title",
    body: "Article text"
}

export default Article;