//import the express
const express = require('express');

//create the instance of our app
const app = express();

//lets set oour view engine

app.set('view engine','ejs');

//listen which means activate the server in port 3000 
app.listen(3000);

//now lets make our routes

app.get('/',(req,res) =>{
  res.render('index');
});

app.get('/about',(req,res) =>{
  res.render('about');
});

app.get('/blogs',(req,res)=>{
  res.render('blogs');
})

app.get('/blogs/add',(req,res)=>{
  res.render('addblog');
})

app.use((req,res)=>{
  res.status(404).render('404');
})