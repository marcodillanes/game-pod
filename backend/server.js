const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
 
const app = express();

app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sqlpass!12",
    database:"gamePod",
})

app.listen(5000, () => {
    console.log("listening...");
})