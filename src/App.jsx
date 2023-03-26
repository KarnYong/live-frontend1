import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://13.212.221.19:5000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="350" image={user.avatar} alt={`${user.username} avatar`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.fname} {user.lname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {user.id} <br />
                Username: {user.username}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
