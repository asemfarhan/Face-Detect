const fs = require('fs');
const express= require ('express');
//const bodyParser=require ('body-parser');
const app= express();
var bcrypt = require('bcryptjs');
var cors = require('cors');
var knex = require('knex');
 
const register =require('./controller/register');
const signin =require('./controller/signin');
const profile =require('./controller/profile');
const rank =require('./controller/rank');


app.use(express.json());
//app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//put your host information
const db = knex({
    client: 'pg',
    ssl: true,
    connection: {
      host      : 'xxxxx',
      user      : 'xxxxx',
      password  : 'xxxxx',
      database  : 'xxxxx',
      Port      : 5432
  }
});

// Root
app.get('/',(req,res)=>{
    console.log('params ', req.params);
    res.status(404).send('<h1>Hi, this page not found</h1>');    
})

//Register
app.post('/register',(req,res)=>{  register.handelReister( req , res , db , bcrypt )    }) 

//Signin
app.post('/signin',( signin.handelSignin( db , bcrypt ) ))

//Profile
app.get('/profile',( req , res )=>{   profile.handelPofile( req , res , db )  })

//Rank
app.put('/rank',( req , res )=>{   rank.handelRank( req , res , db )  })

app.get( '/:id', (req, res)=>{
    console.log('params ', req.params);
    res.status(404).send('<h1>Hi, this page not found</h1>'); });

app.listen(process.env.PORT || 3000, () => {  
    console.log(`app is running on port ${process.env.PORT}`);  })  
// app.listen(3000, () => {console.log('App is running at 3000');});


//DATABASE 

// CREATE TABLE users
// (
//     id serial unique NOT NULL ,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) unique NOT NULL,
//     password VARCHAR(100) NOT NULL,
//     joined date NOT NULL,
//     PRIMARY KEY (id)
// );

// CREATE TABLE enteries
// (
//     id int unique NOT NULL,
//     enteries smallint NOT NULL default 0
// );
