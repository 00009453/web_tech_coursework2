const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  workType: {
    type: String,
    required: true
  },
  requirement:{
      type:String,
      required: true
  },
  jobDescription:{
      type: String,
      required: true
  },
  aboutCompany:{
      type: String,
      required: true
  }
});



module.exports = mongoose.model('Job', jobSchema);
