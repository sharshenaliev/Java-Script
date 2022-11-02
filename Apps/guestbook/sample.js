const express = require('express')
const session = require('express-session')
const sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const database = new Sequelize({
    'host': process.env.BUZZLE_DB_HOST,
    'port': process.env.BUZZLE_DB_PORT,
    'database': process.env.BUZZLE_DB_NAME,
    'username': process.env.BUZZLE_DB_USER,
    'password': process.env.BUZZLE_DB_PASSWORD,
    'dialect': process.env.BUZZLE_DB_DIALECT
})

const User = database.define('user', {
    'login': {
        'type': Sequelize.STRING,
        'allowNull': false,
        'unique': true
    },
    'password': {
        'type': Sequelize.STRING,
        'allowNull': false
    },
    'administrator': {
        'type': Sequelize.BOOLEAN,
        'allowNull': false,
        'defaultValue': false
    }
})

const Message = database.define('Message', {
    'content': {
        'type': Sequelize.STRING,
        'allowNull': false
    }
})

User.hasMany(Message)
Message.belongsTo(User)

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(session({
    'secret' : process.env.BUZZLE_SESSION_SECRET,
    'resave' : false,
    'saveUninitialized': true
}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    Chirp.findAll().then(chirps => {
        response.render('index', {
            'messages' : messages,
            'session' : request.session
        })
    }).catch(error => {
        console.error(error)
        response.status(500).end('Internal Server Error')
    })
})

app.post('/message/create', (request, response) => {
    if (!request.session.authorized) {
        response.status(403).end('Forbidden')
        return;
    }

    Message.create({
        'content' : request.body.content,
        'userId' : request.session.userID
    }).then(() => {
        response.redirect('/')
    }).catch(error => {
        console.error(error)
        response.status(500).end('Internal Server Error')
    })
})

app.get('/register', (req, res) => {
    res.render('register', { 'session' : request.session })
})

app.post('/register', (request, response) => {
    const login = request.body.login
    const password = request.body.password
    const passwordRepeat = request.body['password-repeat']

    if (!login) {
        console.error('Invalid registration attempt: empty login field')

        request.session.error = "The login can't be empty."
        response.redirect('/register')

        return;
    }
    if (!password) {
        console.error('Invalid registration attempt: empty password field')

        request.session.error = "The password can't be empty."
        response.redirect('/register')

        return;
    }

    if (password !== passwordRepeat) {
        console.error('Invalid registration attempt: passwords don\'t match')

        request.session.error = 'Passwords do not match.'
        response.redirect('/register')

        return;
    }

    User.findOne({ 'where' : { 'login' : login } }).then(user => {
        if (user) {
            console.error('Invalid registration attempt: user exists')

            request.session.error = 'This login has already been taken.'
            response.redirect('/register')

            return;
        }

        User.create({
            'login': login,
            'password': bcrypt.hashSync(password, 10)
        }).then(user => {
            request.session.authorized = true
            request.session.login = login
            request.session.userID = user.id
            response.redirect('/')
        })
    }).catch(error => {
        console.error(error)
        response.status(500).end('Internal Server Error')
    })
})

app.get('/login', (req, res) => {
    res.render('login', { 'session' : request.session })
})

app.post('/login', (request, response) => {
    const login = request.body.login
    const password = request.body.password

    User.findOne({ 'where' : { 'login' : login } }).then(user => {
        if (bcrypt.compareSync(password, user.password)) {
            request.session.authorized = true
            request.session.login = login
            request.session.userID = user.id
            response.redirect('/')
        } else {
            console.error('Invalid login attempt: invalid password for ' + login);

            request.session.error = 'Invalid login or password.'
            response.redirect('/login')
        }
    }).catch(error => {
        console.error(error)

        request.session.error = 'Failed to login.'
        response.redirect('/login')
    })
})

app.get('/logout', (req, res) => {
    req.session.regenerate(() => {
        res.redirect('/')
    })
})

sequelize.sync().then(() => User.upsert({
    'login': administratorUser,
    'password': bcrypt.hashSync(adminUser, bcryptSaltRounds)
})).then(() => {
    app.listen(port, () => console.log(`Buzzle is listening on port ${port}!`))
});