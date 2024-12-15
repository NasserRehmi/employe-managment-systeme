import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: ""
  });
 
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/auth/add_admin', admin)
    .then(result => {if(result.data.Status) {
      navigate('/dashboard')
  } else {
      alert(result.data.Error)
  }})
    .catch(err => console.log(err))
    
   
  }
 
  return (
    <div className='d-flex justify-content-center align-items-center h-75' 
    >
      <div className="p-3 rounded w-50 border" style={{ backgroundColor: 'white' }}>
        <h3 className="text-center">Add Admin</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setAdmin({...admin, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setAdmin({ ...admin, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;