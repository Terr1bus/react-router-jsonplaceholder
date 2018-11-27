import React from 'react';
import Article from './Article';
import { Row } from 'reactstrap';

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