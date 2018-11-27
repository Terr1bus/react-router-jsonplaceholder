import React from 'react';
import {
    Jumbotron,
    Button,
} from 'reactstrap';

class MyJymbotron extends React.Component {
    render() {
        return (
            <Jumbotron className="text-center">
                <h1>Jumbotron heading</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <Button color="success" href="#">Sign up today</Button>
            </Jumbotron>
        );
    }
}

export default MyJymbotron;