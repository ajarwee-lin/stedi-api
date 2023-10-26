const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/tristin', (req,res) => {res.send("Hello Tristin")});
app.get('/Tristin', (req,res) => {res.send("Hello Tristin")});
app.get('/Pius', (req,res) => {res.send("Hello Pius")});


app.listen(port, ()=>console.log("Listening"));