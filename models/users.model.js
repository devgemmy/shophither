const { Schema, ...mongoose } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true },
    age: { type: Number, min: 15, required: true },
    password: { type: String },
    email: { type: String, email: true, lowercase: true, required: true }
}, {
    timestamp: true
});

userSchema.pre('save', async function() {
    //username validation
    const userExists = await this.constructor.findOne({
        username: this.username
    });

    if(userExists) {
        return Promise.reject({username: 'Username is already taken'});
    }
    
    // age validation
    // password validation
    // email validation
});

module.exports = mongoose.model('User', userSchema);
