const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const CONNECTION_URL = `mongodb+srv://s123:s123@cluster301.ihv9fgb.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose.connect(CONNECTION_URL);

module.exports = {connection}