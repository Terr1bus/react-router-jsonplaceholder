import React from 'react';
import {
    Col
} from 'reactstrap';
import dataAPI from '../middleware/dataAPI';

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }

        // dataAPI.getAllUsers()
        //     .then(users => {

        //     })
    }

    render() {
        // console.log(this);
        return(
            <main className="mb-3">
                <h4>{this.props.name}</h4>
                <p>{this.props.body}</p>
                <Col md={{size: 2, offset: 10}}>
                    {this.props.email}
                </Col>
            </main>
        )
    }
}

export default Comment;