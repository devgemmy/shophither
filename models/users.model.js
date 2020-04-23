<<<<<<< HEAD
const { Schema, ...mongoose } = require('mongooose');
const { createHash } = require('crypto');
=======
const { Schema, ...mongoose } = require('mongoose');
>>>>>>> a1276046a7f7fe42c828ed01c255227b9a7ea8cc

const userSchema = new Schema({
    username: { type: String, required: true },
    age: { type: Number, min: 15, required: true },
<<<<<<< HEAD
    password: { type: String, select: true},
    email: { type: String }
=======
    password: { type: String },
    email: { type: String, email: true, lowercase: true, required: true }
>>>>>>> a1276046a7f7fe42c828ed01c255227b9a7ea8cc
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

module.exports = mongoose.model('User', userSchema);
