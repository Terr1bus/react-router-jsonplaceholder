import React from 'react';
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
        return(
            <h1>{this.props}</h1>
        )
    }
}

export default Comment;