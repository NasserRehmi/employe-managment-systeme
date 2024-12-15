import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/verify')
    .then(result => {
      if(result.data.Status) {
        if(result.data.role === "admin") {
          navigate('/dashboard')
        } else {
          navigate('/employee_detail/'+result.data.id)
        }
      }
    }).catch(err =>console.log(err))
  }, [])

  return (
    <div className='container-fluid' style={{
      
      height: '100vh',
      width: '100vw'
    }}>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-4'>
          <div>
            <h1 className="logo-text">Hamdi Texitille Company</h1>
          </div>
          <div className='card'>
            <div className='card-body'>
              <h2 className="text-center">Login As</h2>
              <div className="d-flex flex-column justify-content-center mt-5 mb-2">
                <button type="button" className="btn btn-primary mb-2" onClick={() => {navigate('/employee_login')}}>
                  Employee
                </button>
                <button type="button" className="btn btn-success" onClick={() => {navigate('/adminlogin')}}>
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;