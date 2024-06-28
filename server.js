const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// const PORT = process.env.PORT || 3005;

// // Middleware setup
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json()); // Parse JSON bodies

// // Route setup
// app.use('/users', userRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// // import express from 'express';

// const express = require('express');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3003; 

// // Middleware
// app.use(cors()); // Enable CORS for all routes (for development purposes)
// app.use(bodyParser.json()); // Parse incoming JSON payloads

// let users = [
//   {
//     id: 1,
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john.doe@example.com',
//     avatar: 'https://reqres.in/img/faces/1-image.jpg'
//   },
//   {
//     id: 2,
//     first_name: 'Jane',
//     last_name: 'Smith',
//     email: 'jane.smith@example.com',
//     avatar: 'https://reqres.in/img/faces/2-image.jpg'
//   }
// ];

// // Routes
// // GET /users - Fetch all users

// app.get('/users', (req, res) => {
//   res.json(users);
//   res.send('server is ready');
// });

// // POST /users - Create a new user
// app.post('/users', (req, res) => {
//   const newUser = req.body; // Assuming request body contains user data

//   // Assign a unique ID (simulate auto-increment)
//   newUser.id = users.length + 1;

//   // Add new user to the database (in-memory for this example)
//   users.push(newUser);

//   // Send back the newly created user
//   res.status(201).json(newUser);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
