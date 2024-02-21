
const express = require('express');
const http = require('http');
const app = express();
const members = require('./users');
const users = require('./users');

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  const currentDate = new Date().toISOString();
  const response = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #02',
    Date: currentDate,
    Data: members.getMembers(),
  };
  res.json(response);
});

app.get('/users', async (req, res) => {
  try {
    const usersData = await users.getUsers();
    res.json(usersData);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

