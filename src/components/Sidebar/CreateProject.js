import React, { useState } from 'react';
import { useHistory } from 'react-router';
import db from '../../firebase';

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    db.collection("Projects").add({
      projectName: projectName,
      projectDescription: projectDescription,
    })
    history.push("/Projects")
  }

  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <form className="white" style={{ width: "100%", padding: "10px", marginTop: "12rem", borderRadius: "7px" }} onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-4">Crete New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Project Title</label>
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea name="projectDescription" className="materialize-textarea" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" >Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProject;
