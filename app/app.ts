import express, {Application} from 'express'
import morgan from 'morgan'
import path from 'path'
import multer from 'multer'
import env from 'dotenv'

//initializations
const app: Application = express()
env.config()

//config
app.set('port', process.env.PORT || 3666)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//multer configuration
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename(req, file, callback) {
        callback(null, new Date().getTime()+path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));

//routes
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname, '../public')))

export default app