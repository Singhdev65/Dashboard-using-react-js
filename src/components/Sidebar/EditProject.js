import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import db from '../../firebase';

const EditProject = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const { editId } = useParams();
  const history = useHistory();

  useEffect(() => {
    db.collection("Projects").onSnapshot(snapshot => (
      setProjects(snapshot.docs.map((doc) =>
      ({
        id: doc.id,
        projectName: doc.data().projectName,
        projectDescription: doc.data().projectDescription,
      })))
    ))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    history.push("/Projects")
  }


  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <form className="white" style={{ width: "100%", padding: "10px", marginTop: "12rem", borderRadius: "7px" }} onSubmit={(e) => onSubmit(e)}>
        <h5 className="grey-text text-darken-4">Edit Project</h5>
        {projects.filter((id) => { return id.id === editId }).map((project) => (
          <>
            <div className="input-field">
              <label htmlFor="title">Project Title</label>
              <input type="text" defaultValue={project.projectName} onChange={(e) => setProjectName(e.target.value)} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Project Content</label>
              <textarea name="projectDescription" defaultValue={project.projectDescription} className="materialize-textarea" onChange={(e) => setProjectDescription(e.target.value)}></textarea>
            </div>
          </>
        ))}

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" onClick={() => db.collection("Projects").doc(editId).update({
            projectName: projectName,
            projectDescription: projectDescription,
          })}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditProject;
