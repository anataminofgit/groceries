const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routes  = require('./routes/api') ;
const cors = require('cors')



app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(cors());
app.use(routes);


app.listen(4000, function(){
    console.log("server run on port 4000")
});



