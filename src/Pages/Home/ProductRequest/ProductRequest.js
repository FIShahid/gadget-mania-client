import React from 'react';

const ProductRequest = () => {
    const handleForm=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='container' >
            <h2 className='text-center  mt-5 mb-5 p-2 'style={{color:'#b8860b'}}>Request For Products</h2>

            <div>
           
         <div className=''>
         <form className='' onSubmit={handleForm}>
  
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1"  className="form-control"  placeholder='Your Name'/>
  </div>

 
  <div className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" placeholder='Your Email' />
   
  </div>
  <div className="form-outline mb-4">
    <input type="number" id="form4Example1"  className="form-control"  placeholder='Your Phone'/>
  </div>

 
  <div className="form-outline mb-4">
    <textarea className="form-control" placeholder='Put Your Product Request Here' id="form4Example3" rows="4"></textarea>
   
  </div>

  
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
    <label className="form-check-label" htmlFor="form4Example4">
      Send me a copy of this message
    </label>
  </div>

 
  <button type="submit" className="btn  btn-block mb-4 w-100 fw-bold" style={{backgroundColor:'#32CD32'}} >Send</button>
</form>
         </div>
        </div>
      </div>
    
            
       
    );
};

export default ProductRequest;