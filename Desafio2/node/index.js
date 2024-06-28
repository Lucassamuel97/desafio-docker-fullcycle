const express = require('express')
const app = express()
const port = 3000

const config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req,res) => {
    
    const sql = `INSERT INTO people(name) values('Samucaa')`
    connection.query(sql)
    
    connection.query('SELECT name FROM people', (err, results) => {
        if (err) throw err;
  
        const names = results.map(row => row.name).join('<br>');
        res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
      });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})