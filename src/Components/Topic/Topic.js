import React from 'react';
import {

    Link
  } from "react-router-dom";
import "./Topic.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Topic = ({topic}) => {
    console.log(topic);
    return (
        <div className='topic shadow border w-md-50 w-75 h-25 mt-2'>
            <div className='d-flex justify-content-between'>
                <div className="img-container ">
                  <img className='img h-100 p-2'  src={topic.logo} alt="logo" />
                </div>
                <div className="description d-flex align-items-center">
                    <h3> {topic.name}</h3>
                </div>
                <div className=" bottom-2 border d-flex align-items-end">
                    <Link className='take-quiz border rounded text-decoration-none  bg-primary ' to="/"> Take test <span className='ms-2'><AiOutlineArrowRight/> </span>  </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Topic;