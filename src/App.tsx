import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo';
import DuckItem from './DuckItem';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/activities')
        .then(response => {
          console.log(response);
          setActivities(response.data);
        })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
        {ducks.map(duck =>(
          <DuckItem duck={duck} key={duck.name}/>
        ))}
      </header>
    </div>
  );
}

export default App;
