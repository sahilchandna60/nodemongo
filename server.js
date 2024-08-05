const express = require('express');
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/route.js')
const bodyParser = require('body-parser');
const port = 6000

app.use(express.json());

// mongoose connection 
const url = "mongodb+srv://clus255:biludon@cluster56383.7s34vzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster56383";
// mongoose.connect('mongodb://localhost/product', {});
// const db = mongoose.connection;
const connectionparams = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
mongoose.connect((url),connectionparams)
const db = mongoose.connection;
// console.log(db)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB database");
});


/// server code

app.use('/', productRoute)
app.get('/', (req, res) => {
  res.send('goo on you are on home page');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})