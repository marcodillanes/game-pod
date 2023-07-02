const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
const dotenv = require("dotenv").config()
 
const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

app.post('/signup', (req, res)=> {
    db.query("INSERT INTO user_info (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => console.log(err)
    )
})

app.listen(5000, () => {
    console.log("listening...");
    console.log(db)
})

module.exports = db