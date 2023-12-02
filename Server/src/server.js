const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db')


const app = express();

//Routes
const todo = require('./Routes/todo.Routes')

//Connect Database
connectDB();

//Middleware
app.use(express.json({ extended: false }));

//Use Routes
app.use('/api/todo', todo)

const PORT = process.env.PORT_URL || 8000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})