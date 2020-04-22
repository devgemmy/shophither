const { Schema, ...mongoose } = require('mongooose');
const User = require('../models/users.model');

const userSchema = new Schema({
    username: { type: String, required: true },
    age: { type: Number, min: 15, required: true },
    password: { type: String },
    email: { type: String }
}, {
    timestamp: true
});

userSchema.pre('save', async function() {
    //username validation
    const userExists = await this.constructor.findOne({
        username: this.username
    });

    if(userExists) {
        return Promise((resolve, reject) => {
            reject(new Error({username: "Username is already taken"}));
        })
    }
    // age validation
    // password validation
    // email validation
});

module.exports = mongoose.model('User', userSchema);
