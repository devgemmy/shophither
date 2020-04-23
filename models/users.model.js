const { Schema, ...mongoose } = require('mongooose');
const { createHash } = require('crypto');

const userSchema = new Schema({
    username: { type: String, required: true },
    age: { type: Number, min: 15, required: true },
    password: { type: String, select: true},
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
    if (this.age <= age.min) {
        return Promise.reject({age: "User is too young"})
    } 
    
    // password validation
    this.password = createHash('sha256').update(this.password).digest('hex');

    // email validation
});

module.exports = mongoose.model('User', userSchema);
