const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const CONNECTION_URL = `mongodb+srv://dr123:dr123@sclustor.vpbmv2m.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose.connect(CONNECTION_URL);

module.exports = {connection}