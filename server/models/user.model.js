const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema ({

    firstName: {
        type: String,
        require:[true, "First Name is required"],
        minlength: [2, 'First Name must be atleast 2 characters']
    },

    lastName: {
        type: String,
        require:[true, "Last Name is required"],
        minlength: [2, 'Last Name must be atleast 2 characters']

    },

    email: {
        type: String,
        unique: true,
        require:[true, "Email is required"]
    },

    password : {
        type: String,
        require:[true, "Password is required"],
        minLength: [8, "Password must be at least 8 characters"]
    },

}, {timestamps: true})

// virtual field
    // stores info from our request but will not save it to the Db
    // (need to conf password but we don't need to store it)

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value)
    
// middleware affects in the middle of the process
// pre validate automatically runs before any save user in database
// next()allows us to go to the next step which is pre(save)

UserSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords must match!")
        console.log("passwords don't match")
    }
    next() 
})

UserSchema.pre("save", function(next){
    console.log("in pre save");
    // hashing password befor saving it to the Db
    // now we know passwords match from the middleware above
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            this.password= hashedPassword;
            next()
        })
})

const User = mongoose.model("User", UserSchema);

module.exports = User;