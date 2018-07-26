let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");
var mailer = require("./mail/mailer");

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let Schema = mongoose.Schema;
let userDetailsModel = mongoose.model('details', new Schema({
    name: String,
    username: String,
    password: String
}, {collection: 'details'}))
const dburl = process.env.MONGODB_URI;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 8882;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})

mongoose.connect(dburl, {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log("Connected to MongoDB");
})

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/" to submit a message.')
})

app.post('/', (req, res) => {
  const { email = '', name = '', message = '' } = req.body

  mailer.send({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email} .`);
    res.redirect('#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('#error');
  })
})
