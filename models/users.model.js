const { Schema, ...mongoose } = require('mongooose');

const userSchema = new Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('User', userSchema);
