// require the libraries
const express = require('express');
const hbs = require('hbs')
const path = require('path')

const app = express()   //for use our application in express
const port = process.env.port || 8000;

const partialsPath = path.join(__dirname, '../views/partials')
app.use(express.static('.'))


app.set('view engine','hbs');

hbs.registerPartials(partialsPath)

// middelware
app.get('/',(req,res)=>{
    res.render('home', {
        name: 'Saloni'              // sending dynamic data to hbs document
    });
})

app.get('/about',(req,res)=>{
    res.render('about', {
        Name : 'Saloni Wadalkar',
        DOB  : '09/03/2001',
        Address : 'VimanNagar Pune', // sending dynamic data to hbs document
        Email : 'saloniwadalkar09@gmail.com',
        Mobile : '9112625752'              
    });
})

app.get('/skills',(req,res)=>{
    res.render('skills', {
                        // sending dynamic data to hbs document
    });
})

app.get('/certification',(req,res)=>{
    res.render('certification', {
                        // sending dynamic data to hbs document
    });
})

app.get('/contactme',(req,res)=>{
    res.render('contactme', {
                        // sending dynamic data to hbs document
    });
})



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})