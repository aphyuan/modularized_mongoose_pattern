var mongoose = require('mongoose');

//user schema
var userSchema = new mongoose.Schema({
  //type and validations
  name:{type:String, required:true, minlength:3},
  age:{type:Number, min:1, max:150}
  //change the name of timestamps
}, {timestamps:{createdAt: 'created_at', updatedAt: 'updated_at'} });
mongoose.model('user',userSchema);
