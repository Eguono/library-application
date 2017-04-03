const express = require("express")
    , bodyParser = require("body-parser")
    , expressValidator = require("express-validator")
    , auth = require("./controllers/auth.js");


//Initializing Express Application
const app = express();
const route = express.Router();

//Setting default app port
const port = process.env.PORT || 5000;

//Setting Up View Engine
app.set('views', process.cwd() + '/views');
app.set('view engine', 'ejs');


//setup static directory
app.use(express.static('./public'));

//Setup bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setup expressValidator Middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.');
        var root = namespace.shift();
        var formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

//Routing
app.route('/')
    .get((req, res) => {
        res.render('login', {error:null});
    })
    .post(auth.login);

app.route('/register')
    .get((req, res) => {
        res.render('register', {error:null});
    })
    .post(auth.register);




//Listening for request at port 5000
app.listen(port, () => {
    console.log('Listening on port:' + port);
});