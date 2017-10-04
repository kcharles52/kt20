var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    genre:{type:string,required:true, minlength:3,maxlength:100}

});

//virtual for genre url
genreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/'+this._id;
});

//Exporting model
module.exports = mongoose.model('Genre',genreSchema);