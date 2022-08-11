const mongoose = require('mongoose')

const ResumeSchema = mongoose.Schema({
    filename: String,
    author: String,
    appliedOn: Date,
    content: [String]
})

module.exports = mongoose.model('Resumes', ResumeSchema)