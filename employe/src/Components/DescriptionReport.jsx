import React from 'react'
import { useEffect, useState  } from "react";
import axios from 'axios'
import { useParams , Link } from 'react-router-dom';
const DescriptionReport = () => {
        const {id} = useParams()
        const [description,setDescription] = useState([]);
      
      
        useEffect(() => {
          axios
            .get("http://localhost:3000/auth/description_report/"+id)
            .then((result) => {
              if (result.data.Status) {
                setDescription(result.data.Result);
              } else {
                alert(result.data.Error);
              }
            })
            .catch((err) => console.log(err));
        }, []);



    
        return (
          <div className="container" style={{marginTop: '50px'}}>
            <div className='d-flex justify-content-center'>
              <h3 style={{fontWeight: 'bold'}}>Problem Description</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{height: '70vh'}}>
              <div className="card" style={{width: '500px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
                <div className="card-body">
                  <p className="card-text text-center" style={{fontSize: '18px', color: '#666'}}>
                    {description.map((d) => (
                      <div key={d.description}>{d.description}</div>
                    ))}
                  </p>
                </div>
                <div className="text-center" style={{marginTop: '20px'}}>
                  <Link to="/dashboard/report" className="btn btn-success" style={{padding: '10px 20px', fontSize: '18px', borderRadius: '5px'}}>
                    Done
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
        
   
export default DescriptionReport