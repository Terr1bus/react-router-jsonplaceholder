import React from 'react';
import Jubmotron from '../components/Jumbotron';
import Posts from '../components/Posts';

const Home = (props) => {
    // console.log(props)
        return (
            <>
                <Jubmotron />
                <Posts posts={props.posts}/>
            </>
        )
    }

export default Home;