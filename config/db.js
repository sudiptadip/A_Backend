const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const CONNECTION_URL = `mongodb+srv://xyz1234:xyz1234@cluster101.zluhluy.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose.connect(CONNECTION_URL);

module.exports = {connection}