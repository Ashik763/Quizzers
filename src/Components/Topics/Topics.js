import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import "./Topics.css";
const Topics = () => {
    const topics = useLoaderData()?.data;
    console.log(topics);
    return (
        <div className='d-flex align-items-center flex-column mt-5 bg-body-tertiary'>
            {
                
                // console.log(topics)
                topics.map( topic => {
                    return <Topic topic = {topic}> </Topic>
                })
            }
            
        </div>
    );
};

export default Topics;