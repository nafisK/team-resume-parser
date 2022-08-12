const mongoose = require('mongoose')

const ResumeSchema = mongoose.Schema({
    filename: String,
    author: String,
    appliedOn: {
        type: Date,
        default: Date.now
    },
    content: [String]
})

module.exports = mongoose.model('Resumes', ResumeSchema)