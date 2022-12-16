const express = require("express")
const multer = require("multer")
const cors = require("cors")
const port = 8000
const app = express()
app.use(cors())
app.use(express.static('public'))
const db = require('./queries')
app.use(express.json());
app.use(express.urlencoded());


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
app.get('/', db.getPosts) //done
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