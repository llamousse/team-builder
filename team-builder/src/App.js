import React, { useState } from 'react';
import './App.css';
import teamData from './data/teamData.js';

// import Form from "./components/Form.js";

function App() {
  const [team, setTeam] = useState(teamData);
  // console.log(team);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      
      <div>
        {team.map((member, index) => {
          return (
            <p key={index}>
              Member: {member.name} <br/>
              Email: {member.email} <br/>
              Role: {member.role}
            </p>
          );
        })}
      </div>


    </div>
  );
}

export default App;