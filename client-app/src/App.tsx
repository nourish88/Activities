import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Header, List } from "semantic-ui-react";
function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []); // bir kere çalışması için

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities"></Header>

      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
