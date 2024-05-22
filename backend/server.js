const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var routes = require('./router/router');
const cors = require('cors');

var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/furnio';

// console.log(mongoose.connect(mongoURI));

  // mongoose.set('strictQuery', false);
  mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(()=>console.log("Connected"))
  .catch((err)=>{console.log(err)});


// module.exports = connectToMongo;

app.use(express.json());
app.use(routes);
app.use(cors());

// module.exports = routes;



app.listen(port,function check(error){
  if(error){
    console.log("Error");
  } else{
    console.log("Started");
  }
});

// app.use(express.json());

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../frontend/src/index.html'));
// });
