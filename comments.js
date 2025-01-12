//Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// Get a comment by ID
app.get('/comments/:id', (req, res) => {
  res.send('Get a comment by ID');
});

// Update a comment by ID
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment by ID');
});

// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment by ID');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
