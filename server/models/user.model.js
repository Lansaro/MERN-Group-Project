const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema ({

    firstName: {
        type: String,
        require:[true, 'First Name is required'],
        minlength: [2, 'First Name must be atleast 2 characters']
    },

    lastName: {
        type: String,
        require:[true, 'Last Name is required'],
        minlength: [2, 'Last Name must be atleast 2 characters']

    },

    email: {
        type: String,
        unique: true,
        require:[true, 'Email is required'],
        validate: {
            validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Please enter a valid email address'
        },
    },

    password : {
        type: String,
        require:[true, 'Password is required'],
        minLength: [8, 'Password must be at least 8 characters']
    },

}, {timestamps: true})

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match");
    }
    next();
});

UserSchema.pre("validate", function (next) {
    bcrypt
        .hash(this.password, 10)
        .then((hash) => {
            this.password = hash;
            next();
        })
        .catch((err) => {
            console.log("INSIDE ERROR BLOCK");
            console.log(err);
        });
});

module.exports = mongoose.model('User', UserSchema);