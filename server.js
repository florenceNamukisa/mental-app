const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const moodRoute = require('./routes/moodRoute');
const homeRoute = require('./routes/homeRoute');
const loginRoute = require('./routes/loginRoute');
const signupRoute = require('./routes/signupRoute');
const aboutRoute = require('./routes/aboutRoute');
const meditationRoute = require('./routes/meditationRoute');
const contactRoute = require('./routes/contactRoute');
const mindRoute = require('./routes/mindRoute');

const app = express();

// // Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moodTracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/', moodRoute);
app.use('/', homeRoute);
app.use('/', loginRoute);
app.use('/', signupRoute);
app.use('/', aboutRoute);
app.use('/', meditationRoute);
app.use('/', contactRoute);
app.use('/', mindRoute);
// Start the server

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
