import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link , useNavigate, useParams } from 'react-router-dom'


const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const {id} = useParams()
    
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      }
      
   
      return (
        <div className="container" style={{marginTop: '50px'}}>
          <div className='d-flex justify-content-center'>
         
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{height: '70vh'}}>
            <div className="card">
              <div className='d-flex align-items-center flex-column mt-5'>
              <h3>Name: {employee.name}</h3>
              <h3>Email: {employee.email}</h3>
              <h3>Salary: {employee.salary} DT</h3>
              <br></br>
          </div>
          <div className="d-flex justify-content-center">
           
  <Link
    to={`/add_report/${employee.name}`}
    className="btn btn-info btn-sm me-2"
  >
    Report
  </Link>
  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
</div>
      </div>
            </div>
          </div>
        
      );
    };
    
     

export default EmployeeDetail