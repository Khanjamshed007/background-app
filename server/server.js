import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import ConnectDB from './configs/mongodb.js';
import userRouter from './routes/UserRoutes.js';
import imageRouter from './routes/ImageRoute.js';



// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await ConnectDB()

// Intialize middleware
app.use(express.json())
app.use(cors())


// API Routes
app.get('/', (req, res) => res.send("Api Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.listen(PORT, () => console.log("Server running on port " + PORT))