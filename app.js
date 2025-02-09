require('dotenv').config();
const expressLayout = require('express-ejs-layouts');
const express = require('express');
const connectDB = require('./server/config/db');



const app = express();
const PORT = 5000 || process.env.PORT;

connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');



app.use('/',require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App Listening on : ${PORT}`)
});

