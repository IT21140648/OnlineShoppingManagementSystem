/*const express = require('express')

const cors = require('cors')

const dotenv = require('dotenv')

const apiRoutes = require('./apiRoutes/routes')

const app = express()

dotenv.config()

require('./database/DbConnection')




//middle wares



app.use(cors())

app.use(express.json())

app.use("/api", apiRoutes)





const port = process.env.PORT || 8000



app.listen(port, () => {

    console.log(`Admin backend service one started on port ${port}`)

})*/
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 