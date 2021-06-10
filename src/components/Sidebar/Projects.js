import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../firebase';

const Projects = () => {
  const [projects, setProjects] = useState([]);

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

  const columns = [
    { field: "id", headerName: 'ID'},
    { field: 'projectName', headerName: 'Project Name', width: "200px"},
    { field: 'projectDescription', headerName: 'Project Description', width: "700px"},
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => {
        return (
          <div className="action">
          <Link to={`/EditProject/${params.id}`}>
            <button className="userListEdit" >Edit</button>
            </Link>
            <button className="userListEdit" style={{backgroundColor:"red"}} onClick={() => db.collection("Projects").doc(params.id).delete()}>Delete</button>
          </div>
        )
      }
    }
  ];

    return (
        <div style={{height: '100vh', width:"100%", margin:"1.5rem 2rem"}} >
        <h3 style={{color:"#fff", fontWeight:"bold"}}>Projects</h3>
                        <DataGrid autoHeight disableSelectionOnClick rows={projects} columns={columns} pagination />
        </div>
    )
}

export default Projects;
