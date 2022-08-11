const mongoose = require('mongoose')

const ResumeSchema = mongoose.Schema({
    filename: String,
    content: [String]
})

module.exports = mongoose.model('Resumes', ResumeSchema)