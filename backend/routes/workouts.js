/*const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

//Get all workouts 
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
} )

//Get a single workout 
router.get('/:id', (req, res) =>{
    res.json({mssg: 'Get single workout'})
})

//post a workout 
router.post('/', async (req, res) => {
    const{type, load, reps} = req.body 

    try{
       const workout = await Workout.create({type, load, reps}) 
       res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//delete a workout 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete a workout '})
})

//update a workout 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a workout '})
})
module.exports = router*/

const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router