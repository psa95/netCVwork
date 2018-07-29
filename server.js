let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");
var mailer = require("./mail/mailer");
var keys = require('./config/keys');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// let Schema = mongoose.Schema;
// let userDetailsModel = mongoose.model('userDetails', new Schema({
//     name: String,
//     username: String,
//     password: String
// }, {collection: 'userDetails'}))

const dburl = process.env.MONGODB_URI || keys.mongoURI;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 8882;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

mongoose
.connect(dburl, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/" to submit a message.')
});

app.post('/', (req, res) => {
  const { email = '', name = '', message = '' } = req.body

  mailer.send({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email} .`);
    res.redirect('#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('#error');
  })
});
