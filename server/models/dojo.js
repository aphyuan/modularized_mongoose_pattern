var mongoose = require('mongoose');

var dojoSchema = new mongoose.Schema({
  location:{type:String, required:true, minlength:6}
},{timestamps:{createdAt: 'created_at', updatedAt: 'updated_at'} });
mongoose.model('dojo',dojoSchema);
