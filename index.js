const env = require('env2')('./.env');
const bodyParser = require('body-parser');
const app = require('express')();
const cors = require('./services/cors');
const mongoose = require('mongoose');

// middleware
app.use(bodyParser.json());
app.use(cors);

// config
app.set('port', process.env.SERVER_PORT || 8080);

// db connect
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, function (err, db) {
    if (!err) {
        console.log('Connected to database');
    }
});

// routes
app.get('/', (req, res) => {
    res.json(process.env);
});

const User = require('./models/User');
app.post('/users/add', (req, res) => {

    console.log(req.body);
    var user = new User(req.body);

    user.save((err) => {
        err ? console.log('Nope, bro!') : console.log('We did it, bro!');
    });
});

app.get('/users', (req, res) => {
    User.find({}).exec((err, result) => {
        if (err) {
            console.log('ERROR: ' + err.code + ' ' + err.message)
        } else {
            res.send(result);
        }
    });
});

// app
const server = app.listen(app.get('port'), () => {
    console.log('App is listening to the port ' + server.address().port + '...');
});