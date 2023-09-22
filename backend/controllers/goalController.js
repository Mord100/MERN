const asyncHandler = require('express-async-handler')
// @des Get gaols
// @route GET /api/goals

const { set } = require("mongoose")

// @access private 
const getGoals = asyncHandler(async(req, res) => {
    console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text feild')
    }
    res.status(200).json({message: 'get goals'})
})

// @des set gaols
// @route POST /api/goals
// @access private 
const setGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'set goals'})
})

// @des update gaols
// @route PUT /api/goals/id
// @access private 
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

// @des delete gaols
// @route DELETE /api/goals/id
// @access private 
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}