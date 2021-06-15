require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({status: 200, message: 'success! You did it! You are a hero!'});
})

app.listen(PORT, ()=> {
  console.log((`Server working on port: ${PORT}`));
})