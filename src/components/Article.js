import React from 'react';
import {
    Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Article extends React.Component {
    render() {
        console.log(this);
        return (
            <Col md={4} className="text-center">
                <Link to={this.props.id}><h3>{this.props.title}</h3></Link>
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