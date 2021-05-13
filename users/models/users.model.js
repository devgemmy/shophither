const { Schema, ...mongoose } = require('mongoose');
const { createHash } = require('crypto');

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, min: 15, required: true },
    password: { type: String },
    email: { type: String, email: true, lowercase: true, required: true },
    permissionLevel: Number
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
    if (this.age <= age.min) {
        return Promise.reject({age: "User is too young"})
    } 
    
    // password validation
    this.password = createHash('sha256').update(this.password).digest('hex');

    // email validation
});

const userModel = mongoose.model('User', userSchema);


module.exports = userModel; 
