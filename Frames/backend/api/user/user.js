const restful = require('node-restful');
const mongoose = restful.mongoose;


const userSchema = new mongoose.Schema({
  name:{type:String, required:true},
  sexo:{type:String, required: true, uppercase:true, enum:['M','F']}
});

module.exports = restful.model('User', userSchema);
