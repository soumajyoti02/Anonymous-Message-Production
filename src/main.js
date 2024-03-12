const express = require('express')
require('dotenv').config(); // Load environment variables from .env file

const mongoose = require("mongoose")
const path = require('path');
const Message = require("../models/Messages.js")

const app = express()
const port = 3000

app.use('/src', express.static(path.join(__dirname, '../public/src')));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // Add this line to parse JSON bodies

/*
If You want to use Routes folder to organize routes, then the required folder Structure
your - express - app /
│
├── src /
│   ├── routes /
│   │   ├── index.js       // Main router file
│   │   ├── messages.js    // Route handler for messages
│   │   └── otherRoutes.js // Additional route handlers
│   │
│   └── main.js            // Entry point of your Express application
│
└── .env                   // Environment variables


// Define routes

const indexRouter = require('./routes/index');
const messagesRouter = require('./routes/messages');
// Add more route handlers as needed

// Use routes

app.use('/', indexRouter);
app.use('/api/messages', messagesRouter);
// Use more routes as needed

*/
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToDatabase(); // Call the async function to establish the database connection


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});


app.post('/', async (req, res) => {
    const message = new Message({
        mess: req.body.message,
    })
    let resp = await message.save()
    res.status(200).json({ acknowledgement: true })
})


app.get('/allmessage', async (req, res) => {
    res.sendFile("allmessage.html", { root: path.join(__dirname, '../public') });
})

app.get('/message', async (req, res) => {
    const message = await Message.find({})
    res.status(200).json(message)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})