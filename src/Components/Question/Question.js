import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import "./Question.css";


const Question = ({id,question,number,setCorrectAnswer,setWrongAnswer,correctAnswer,wrongAnswer,notify,notify2}) => {
   
    // console.log(question);
// console.log(id);
    const questionName = question.question;
    const [one,two,three,four] = question.options;

    const showAnswer = (event,options ,answer,id) => {
   
        console.log("clicked");
       let num =  options.indexOf(answer);
             let opt = event.target?.nextSibling?.children[num];
             console.log( event.target);
             console.log( event.target?.nextSibling);
             console.log(event.target?.nextSibling?.children[num]);
             console.log(opt);
           
            if(opt){
                opt.style.color='orange';
                let attemptedQuizes =   ( localStorage.getItem('attempted-quiz') ) ;
                if(attemptedQuizes){
                    attemptedQuizes = JSON.parse(attemptedQuizes);
                    attemptedQuizes[id] = true;
                }
                else{
                    attemptedQuizes={};
                    attemptedQuizes[id]=true;
                    localStorage.setItem('attempted-quiz' , JSON.stringify(attemptedQuizes));
                }
            
                
            }
            else {
                alert("answer not available")
            }
    //    e.target.parentNode.childNodes[2].childNodes[num].style.color = 'yellow';

    }
    const checkAnswer = (e,chosen,answer,id) => {
       let selectedOption = e.target;
       let quiz =  selectedOption.parentNode.parentNode.childNodes[0];
       quiz.style.color = 'blue';

        let attemptedQuizes =  localStorage.getItem('attempted-quiz');
        if(attemptedQuizes){
            attemptedQuizes = JSON.parse(attemptedQuizes);
            if(attemptedQuizes[id]===undefined){
                if(answer === chosen){
                    setCorrectAnswer(correctAnswer+1);
                    notify();
                    selectedOption.style.color = "lightgreen";
                   
                  
                    
                   
                }
                else{
                    selectedOption.style.color = "red";

                    notify2();
                    
        
                    setWrongAnswer(wrongAnswer+1);
                
                  
                }

                attemptedQuizes[id]=true;
                localStorage.setItem('attempted-quiz' , JSON.stringify(attemptedQuizes));
            }
            else{
                alert("Already tried");
            }
        }
        else{
            if(answer === chosen){
                selectedOption.style.color = "lightgreen";
                setCorrectAnswer(correctAnswer+1);
                notify();
               
              
                
               
            }
            else{

                selectedOption.style.color = "red";
                notify2();
                
    
                setWrongAnswer(wrongAnswer+1);
            
              
            }
            attemptedQuizes={};
            attemptedQuizes[id]=true;
            localStorage.setItem('attempted-quiz' , JSON.stringify(attemptedQuizes));

        }
        
        console.log("clicked");
      
       
        e.preventDefault();
        // console.log("clicked");
       

    }
    return (
        <>

        <div className='shadow p-5 mt-3 position-relative'>
         <p className='quesion-name'> Quiz {number} : {questionName.substring(3,questionName.length-4)}
          
         </p> 
         <div onClick={(e)=>showAnswer(e , question.options, question.correctAnswer,id)} className='show-answer'> 
         {/* <AiFillEye   /> */}
             👀
         </div>
        
         <div className="options row">
            
            <div onClick={(e)=>checkAnswer(e,one, question.correctAnswer,id)}  className="option col-12 col-md-5" >
              a. {one}
                
            </div>

            <div  onClick={(e)=>checkAnswer(e,two, question.correctAnswer,id)} className="option col-12 col-md-5">
                b. {two}  
                
            </div>
            <div onClick={(e)=>checkAnswer(e,three, question.correctAnswer,id)} className="option col-12 col-md-5">
                c. {three} 
             </div>
            <div onClick={(e)=>checkAnswer(e,four, question.correctAnswer,id)} className="option col-12 col-md-5">
                d. { four? four:'None' } 
                
            </div>
            
            
        
         </div>
        </div>


            
        </>
    );
};

export default Question;