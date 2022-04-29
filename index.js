const express = require("express");
const app = express()
require('./schemas/user');
const passport = require('./services/passport');


require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello setup");
});

app.listen(PORT);