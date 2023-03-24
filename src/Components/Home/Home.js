import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import "./Home.css";

const Home = () => {
    // const topics = useLoaderData();
    // console.log(topics);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;