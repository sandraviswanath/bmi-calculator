
import { useState } from 'react';
import './App.css';
import Bmilist from'./components/Bmilist';
import Bmiscore from './components/bmiscore';
import Form from './components/form';
function App() {
  const[bmi,setBmi]=useState("0");
  const[bmiType,setBmiType]=useState("not calculated");
const onFormsub =(w,h)=>{
  let b=calBmi(w,h);
  setBmi(b);
  let bType=weightType(b)
  setBmiType(bType)
  console.log(w,h);
}
const calBmi = (w,h)=>(w/(h*h)).toFixed(2);
const weightType=(bmi) =>{
  if(bmi<18.5){
    return "underweight";
  }else if(18.5< bmi && bmi<24.9){
    return "normal";
  }else if(24.9<bmi&&bmi<29.9){
    return"overweight";
  }else if(29.9<bmi&& bmi<34.9){
    return"obesity class 1";
  }else if(34.9<bmi && bmi<39.9){
    return"obesity class 2";
  }else if(bmi>39.9){
    return"obesity class 3";
  }
};

return (
    <>
    <div className="container">
      <div className='row justify.content.center mt-5 mx-2'>
    <Form onFormsub={onFormsub}/>
      </div>
      <div className='row justify-content-center mt-5'>
       <div className='col-12 col-sm-6 mb-5'>
        <Bmiscore bmiNo={bmi}bmiName={bmiType}/>
        </div>
        <div className='col-12 col-sm-6'>
        <Bmilist/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
