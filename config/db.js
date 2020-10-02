const mongoose = require('mongoose')

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongo "mongodb+srv://cluster0.8oibv.mongodb.net/Cluster0" --username james')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))