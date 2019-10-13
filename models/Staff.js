const mongoose = require('mongoose');
const {Schema} = mongoose;

const staffSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('staffs', staffSchema);