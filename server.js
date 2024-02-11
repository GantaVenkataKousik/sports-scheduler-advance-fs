const express = require('express')
const router = express()
const bodyParser = require('body-parser')
router.use('/images', express.static('images'));
const session = require("express-session");
const path = require("path");
const saltRounds = 10


var cookieParser = require("cookie-parser")
router.use(bodyParser.json())
router.set('views', './views');

router.use(express.urlencoded({ extended: false }));

router.set("view engine", "ejs");
router.use(express.static(path.join(__dirname, 'public')));

router.get("/login", (req, res) => {
    res.render("auth/login");
})

router.get("/register", (req, res) => {
    res.render("auth/register");
})

router.get('/user/dashboard', (req, res) => {
    res.render('user/dashboard');
})


router.listen(9002, () => {
    console.log("Hurray! Express server started at port 9002");
});

