// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  password: String,
  email: String,
  address: String,
});

const User = mongoose.model('User', userSchema);

// Handle POST request for registration
app.post('/register', async (req, res) => {
  try {
    const { name, phoneNumber, password, email, address } = req.body;
    const newUser = new User({
      name,
      phoneNumber,
      password,
      email,
      address,
    });
    await newUser.save();
    res.status(201).send('Registration Successful!');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
