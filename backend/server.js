const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
 
const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

app.listen(5000, () => {
    console.log("listening...");
    console.log(db)
})

module.exports = db