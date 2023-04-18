import { useState } from 'react';

function Form({onFormSub}) {
  const[weight,setweight]= useState("");
  const[height,setheight]= useState("");
  const[alert,setAlert]=useState(false);
  const onSubmit =(e)=> {
    e.preventDefault();
    if(isNaN(weight)||isNaN(height)){
      console.log("not a valid input")
    setAlert(true);
    }else{
      onFormSub(weight,height)
  setAlert(false);
  }
  };
  return (
    
      <div className='col-5m-4 shadow rounded px-5'>
        <h1 className='text-center pt-3 text-secondary h2'>BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className='row'>
            <div className='col col-5m-6'>
              <div className='my-3'>
                <label className='form-label'>weight(kg):</label>
                <input type="text" value={weight} onChange={(e)=>setweight(e.target.value)}  className="form-control"required/>
              </div>
            </div>
            <div className='col col-5m-6'>
            <div className='my-3'>
              <label className="form-label">Height(m):</label>
<input type="text" value={height} onChange={(e)=>setheight(e.target.value)}   className="form-control"required/>
            </div>
            </div>
          </div>
          <input
          type="submit"
          className="btn btn-primary my-3"
          value="get BMI"/>
        </form>
        {alert && <div className="alert alert-danger" role="alert">please enter valid data</div> }
      </div>
  
  )
}

export default Form
