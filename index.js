const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const model = require('./models/index.js');
const User = model.User;
const Note = model.Note;
const NoteUser = model.NoteUser;

//////////////////
// LANDING PAGE //
//////////////////

app.get('/', function (req, res) {

    res.render('index.ejs')
})

// GET USER PAGE //
app.get('/users', function (req, res) {
    User.findAll()
        .then(function(User) {
            res.render('user.ejs', { User: User })
        })
})


// GET USER RAW //
app.get('/userraw', function(req, res) {
    User.findAll({
        include: [{
            model: Note,
            through: {
                attributes: ['NoteId, UserId']
            }
        }]
    })
        .then(function(userraw) {
            res.send(userraw)
        })
})



// LISTEN PORT //
app.listen(port, function() {
    console.log(`listening on: ${port}`)
})