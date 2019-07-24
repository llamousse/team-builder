import React, { useState } from 'react';
import './App.css';
import teamData from './data/teamData.js';

// import Form from "./components/Form.js";

function App() {
  const teamList = teamData;
  // console.log(teamList); 

  return (
    <div className="App">
      <h1>Team Builder</h1>
      
      <div>
        {teamList.map((member, index) => {
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