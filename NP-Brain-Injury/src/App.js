// eslint-disable-next-line
import React, { useState } from 'react';
// eslint-disable-next-line
import { Questions, MainQuestion, Stage1Questions, Stage2Questions, Stage3Questions, Stage4Questions } from "./questions";
// Styles
import "./tailwind.output.css";

//#172c48
//rgb(23,44,72)

const QuestionsComponent = ({question, updateAnswer})=>{

const list = question.options.map((item, key)  => <div className={question.answer === item ? 'py-2 my-2 border cursor-pointer bg-blue-300' : 'py-2 my-2 border cursor-pointer'} key={key} onClick={()=>updateAnswer(key)}>{item}</div>)
  return(
    <div className="h-full w-full flex flex-col justify-center text-center border rounded-lg border-8 px-4">
      <div className="pb-4 font-bold">{question.question}</div>
      <div className="flex flex-col">
        {list}
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}


const App = () => {

  const [questions, setQuestion] = useState(Questions);
  const [current, setCurrent] = useState(0);

  const updateAnswer = (index) => {
    
    const answer = questions[current].options[index]
    const questionsArray = [...questions]

    questionsArray[current].answer = answer

      if(answer === "Supporter"){
        window.location.href = "https://craighospital.org/foundation/howtogive"; //redirects
      }
    // console.log(answer)
    setQuestion(questionsArray)
  }

  const nextQuestion = () =>{
    if(current < Questions.length-1){
      setCurrent(current+1)
    }

  }
  const prevQuestion = () =>{

    if(current !== 0){
      setCurrent(current-1)
    }
    
  }
  return (
    <div className="flex flex-col min-h-screen bg-white p-4 lg:px-64">
      <h2 className=" text-center text-4xl font-bold text-blue-900">BUILT BY SURVIVORS, FOR SURVIVORS</h2>
      <div className=" flex flex-col mt-auto mb-auto">
        <QuestionsComponent question={questions[current]} updateAnswer={updateAnswer}/>
        <div className="w-full flex flex-row justify-between mt-12 ">
          <div className={current > 0 ? '' : 'hidden'} onClick={prevQuestion}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          </div>
          <div className={current > 0 ? '' : 'ml-auto'}  onClick={nextQuestion}>
          <svg xmlns="http://www.w3.org/2000/svg" className={current ===  (questions.length-1) ? 'hidden' : ' h-12 w-12 cursor-pointer' } fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </div>
        </div>

        <div></div>



      </div>

      <div className="flex flex-col mx-auto mt-auto">
          {/* <div>Help</div> */}
          <div  className="flex flex-row mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>

        </div>
    </div>
  );
};

export default App;
