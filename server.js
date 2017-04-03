const express = require ("express");

//Initializing Express Application
const app = express();

//Setting default app port
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Working');
});


app.listen(port, ()=> {
    console.log('Listening on port:' + port);
});