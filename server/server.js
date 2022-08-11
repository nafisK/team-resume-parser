const e = require('express')
const express = require('express')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')
const Resume = require('./models/resume')

const app = express()

require('./database')();

// default options
app.use(fileUpload())
app.use(express.json())

// checking for working server
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

// handles upload of ONE file
app.post('/upload', function (req, res) {
  let sampleFile
  let uploadPath
  let pdfArr = []

  // rejex to remove all punctuation except for single quote
  const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g

  // checks if no file was uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile
  //console.log(sampleFile)
  uploadPath = __dirname + '/files/' + sampleFile.name

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    // if error, return error
    if (err) return res.status(500).send(err)

    // if no error, parse pdf and return data/use stored data
    pdfParse(sampleFile).then(result => {
      // removes punctuation from entire file
      let withoutPunctuation = result.text.replace(regex, '')

      // removes all \n from entire file
      withoutPunctuation = withoutPunctuation.replace(/(\r\n|\n|\r)/gm, '')

      // splits file into an array of words
      pdfArr = withoutPunctuation.split(' ')

      // remove singular random characters
      pdfArr = pdfArr.map(word => {
        if (word.length !== 1) {
          return word
        }
      })

      // remove null elements created by removing elements with only one character
      pdfArr = pdfArr.filter(word => {
        if (word !== undefined) {
          return word
        }
      })

      // removes random in pdf || more can be added later
      pdfArr = pdfArr.filter(element => {
        return element !== '' && element !== '.' && element !== '·'
      })

      // send pdf data to database
      const resume = new Resume({
        filename: sampleFile.name,
        content: pdfArr
      })
      resume.save().then(
        res.send()
      )

      // UNCOMMENT || COMMENT FOR TESTING
      console.log(pdfArr)
    })
  })
})

PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`)
})
