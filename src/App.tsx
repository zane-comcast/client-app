import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

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
    <div>
      <Header as='h2' icon='users' content='reactivities' />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
