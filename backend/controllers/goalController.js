const asyncHandler = require('express-async-handler')
const { set } = require("mongoose")
const Goal = require('../models/goalModel');

// @des Get goals
// @route GET /api/goals
// @access private 
const getGoals = asyncHandler(async(req, res) => {
   const goals = await Goal.find()

    res.status(200).json(goals)
})

// @des set gaols
// @route POST /api/goals
// @access private 
const setGoals = asyncHandler(async(req, res) => {
     console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text feild')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

// @des update gaols
// @route PUT /api/goals/id
// @access private 
const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,
        {
            new:true,
        })
    res.status(200).json(updatedGoal)
})

// @des delete goals
// @route DELETE /api/goals/id
// @access private 
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    
    await Goal.deleteOne({ _id: req.params.id }); // Use deleteOne method directly on the model

    
    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}