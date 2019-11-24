const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, (error) => {
    if(error) console.log('Database Connection Error---------', error);
    console.log('Database connected');
});

const user = new Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model("User", user)