const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const CONNECTION_URL = "mongodb+srv://sudip123:sudip123@cluster0.mgfuqey.mongodb.net/?retryWrites=true&w=majority"
const connection = mongoose.connect(CONNECTION_URL);

module.exports = {connection}