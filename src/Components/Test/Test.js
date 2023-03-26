import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import Question from '../Question/Question';
import './Test.css';

const Test = () => {
    const notify = () => toast("Correct!🎉");
    const notify2 = () => toast("Wrong !😪");

    const [correctAnswer,setCorrectAnswer] =  useState(0);
    const [wrongAnswer,setWrongAnswer] = useState(0);
    const data = useLoaderData()?.data;
    const questions = data?.questions;

    
    return (
        <> 
        <div className='mt-5 border questions-container  d-flex justify-content-center'>
            <div className=" border questions  w-75 d-flex justify-content-center align-items-center flex-column">
            <h2> Quiz of {data.name}</h2>
           <p className='result ' > <small> ✅ {correctAnswer} ❌ {wrongAnswer}</small> </p>
            {
                questions.map((question,index) =>{
                    console.log(question);
                    return <Question 
                    key={question.id}
                   id={question.id}
                    question={question}
                    number={index+1} 
                    correctAnswer={correctAnswer}
                    wrongAnswer={wrongAnswer}
                    setCorrectAnswer={setCorrectAnswer}
                    setWrongAnswer={setWrongAnswer} 
                    notify={notify}
                    notify2={notify2}
                    > 
                    </Question>
                })
            }
            </div>
         
        </div>
        <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
         />

        </>
    );
};

export default Test;