import React from 'react';
// import Article from './Article';
import { 
    Row,
    Col,
 } from 'reactstrap';
 import { Link } from 'react-router-dom';

const Article = (props) => {
    // console.log(this);
    return (
        <Col md={4} className="text-center">
            <Link to={props.id}><h3>{props.title}</h3></Link>
            <p>{props.body}</p>
        </Col>
    )
}

Article.defaultProps = {
    title: "Article title",
    body: "Article text"
}

class Articles extends React.Component {
    render() {
        const articles = this.props.articles.slice(0, 6).map((article, index) => (
            <Article {...article} key={index}/>
        ))
        return (
            <Row>
                {articles}
            </Row>
        )
    }
}

export default Articles;