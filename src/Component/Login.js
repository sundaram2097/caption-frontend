import React from 'react'

function Login() {
  return <>
   <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Enter your Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Enter your Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </>
}

export default Login