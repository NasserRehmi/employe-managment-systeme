import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Reports = () => { 
    const [report, setReports] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/reports')
        .then(result => {
            if(result.data.Status) {
                setReports(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
return(
<div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Reports List</h3>
      </div>

<div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                     <th style={{ width: '25%' }}>Reporter</th>
                    <th style={{ width: '65%' }}>Report Subject</th>
                    <th style={{ width: '10%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {report.map((r) => (
                            <tr>
                                <td>{r.reporter}</td>
                                <td>{r.subject}</td>
                                <td><Link
                                      to={`/description_report/`+r.id}
                                      className="btn btn-info btn-sm me-2"
                                    >
                                    read
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
</div>


)












}
export default Reports