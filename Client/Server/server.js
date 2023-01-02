const express = require("express")
const multer = require("multer")
const cors = require("cors")
const fileUpload = require('express-fileupload')
const port = 8000
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.urlencoded({ extended: true}));
app.use(fileUpload());
app.use(express.static('public'))
const db = require('./queries')

// START COOKIE SECTION
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET","POST","DELETE","PUT"],
        credentials: true
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        key: "demoID",
        secret: "demoday",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 24,
        }
    })
);

// END COOKIE SECTION

app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public")
    },
    file: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage }).array("file")

//ROUTES
app.post('/register', db.createUser)
app.post('/', db.loginUser)
app.post('/', db.logoutUser)
app.get('/', db.getPosts) //done
app.get('/', db.authUser)
app.get('/item/:id', db.getItem) //done
app.put('/item/:id', db.updateItem) //done
app.delete('/item/:id', db.deleteItem)
app.post('/upload', db.createItem) //done
// app.get('/', db.getFavorites)
   

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.files)
    }) 
})

app.listen(port, () => {
    console.log("app is running on port 8000")
})