const express = require('express')
const { db, sequelize } = require('../db/mysql')
const { Employee, Activity, EmployeeActivity } = require('../models/index')
const proc = require('../db/procedures')

const router = new express.Router()
router.use(express.json())

router.get('/tasks/completed/:id', async (req, res) => {
    try{
        const result = await sequelize.query(proc.viewCompletedTasks(req.params.id))
        res.send(result)
    }
    catch(e){
        console.log(e)
    }
})

router.get('/cycles/:id', async (req, res) => {
    try{
        const result = await sequelize.query(proc.viewEmployeeCycles(req.params.id))
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(400).send()
    }
})

router.get('/profile/:id', async (req, res) => {
    try{
        const personalInfo = (await sequelize.query(proc.viewEmployeePersonalInfo(req.params.id)))[0]
        const employeeDepartments = (await sequelize.query(proc.viewEmployeeDepartment(req.params.id)))[0]
        const employeePractice = (await sequelize.query(proc.viewEmployeePractice(req.params.id)))[0]
        res.send({personalInfo, employeeDepartments, employeePractice})
    }catch{
        res.status(400).send()
    }
})

router.get('/achievments/:userid/:cycleid', async (req, res) => {
    
})

module.exports = router