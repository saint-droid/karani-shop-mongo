const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username:{type:String, required:true, unque:true},
        email:{type:String, required:true, unque:true},
        password:{type:String, required:true, },
        isAdmin:{type:Boolean, default:false, },
        
    },
    {timestamps:true}
);
module.exports = mongoose.model("user", UserSchema)