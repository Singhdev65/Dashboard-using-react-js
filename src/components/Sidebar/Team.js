import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../firebase';
import './Team.css';
import { Button } from '@material-ui/core';

const Team = () => {
    const [teams, setTeams] = useState([]);

 useEffect(() => {
        db.collection("Team").onSnapshot(snapshot => (
            setTeams(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        )) 
    }, []) 

    return (
        <div className="team">
            <div className="team__wrapper">
            <div className="team__TitleContainer">
        <h1 className="team__Title">Our Team</h1>
        <Link to="/AddTeam" style={{textDecoration: "none"}}>
          <button className="team__AddButton">Add</button>
          </Link>
      </div>
      <div className="team__cardWrapper">
      {teams.map((team) => (
      <div className="team__card" key={team.id} id={team.id}>
          <div className="team__cardImg">
              <img src="https://bit.ly/3gxGjx1" alt="" />
          </div>
          <div className="team__cardInfo">
              <h4>{team.data.fullName}</h4>
              <h6>{team.data.position}</h6>
              <Button 
            variant="contained"
            color="primary" 
            onClick={() => db.collection("Team").doc(team.id).delete()}
            style={{marginTop: "1rem", background:"Red", fontWeight: "bold"}}>Delete Member</Button>
          </div>
      </div>
      ))}
      </div>
            </div>
        </div>
    )
}

export default Team;
