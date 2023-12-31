const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
const dotenv = require("dotenv").config()
 
const app = express();

app.use(express.json())

app.use(cors());

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

app.post('/SignUp', (req, res)=> {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO user_info (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => console.log(err)
    )
})

app.post('/', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM user_info WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        if (err ) {
            res.send({err: err})
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "Wrong username/password combination"})
        }
        
        }
    )
})

app.listen(5000, () => {
    console.log("listening...");
})

module.exports = db