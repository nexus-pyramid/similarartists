var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log('made it artist model?')
var ArtistSchema = new Schema({
	name: String,
  // similar: [{
  //   type: mongoose.Schema.Types.ObjectId, ref: 'Artist'
  // }]

});

mongoose.model('Artist', ArtistSchema);
var Artist = mongoose.model('Artist');
