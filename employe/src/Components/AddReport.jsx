import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AddReport = () => {
    const {id} = useParams()
    const [report, setReport] = useState({
      reporter:id,
      subject: "",
      description: ""
    });
const handleSubmit = (r) => {
  r.preventDefault()
  axios.post('http://localhost:3000/auth/add_report', report)
  .then(result => {if(result.data.Status) {
    alert("report added succesfully")

} else {
    alert(result.data.Error)
}})
  .catch(err => console.log(err))
}
return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6"style={{ backgroundColor: 'white' }}>
          <h3 className="text-center">Add report</h3>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="inputsubject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputsubject"
                placeholder="Enter Subject"
                autoComplete="off"
                onChange={(e) =>
                  setReport({ ...report, subject: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description of the report
              </label>
              <textarea
                className="form-control rounded-0"
                id="description"
                placeholder="Enter Description"
                onChange={(e) =>
                  setReport({ ...report, description: e.target.value })
                }
              />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AddReport;