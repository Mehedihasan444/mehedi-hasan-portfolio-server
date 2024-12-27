import { catchAsync } from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { Skill } from "./skill.model"



const createSkill = catchAsync(async (req, res) => {
const skill = await Skill.create(req.body)
sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Skill created successfully',
    data: skill,

})
})

const getSkills = catchAsync(async (req, res) => {
const skill = await Skill.find()
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill fetched successfully',
    data: skill,
})
})

const getSkill = catchAsync(async (req, res) => {
const skill = await Skill.findById(req.params.id)
    sendResponse(res, {
    statusCode: 404,
    success: false,
    message: 'Skill not found',
    data: skill,
    })
})


const updateSkill = catchAsync(async (req, res) => {
const skill = await Skill.findByIdAndUpdate(req.params.id, req.body)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill updated successfully',
    data: skill,
})
})


const deleteSkill = catchAsync(async (req, res) => {
const skill = await Skill.findByIdAndDelete(req.params.id)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill deleted successfully',
    data: skill,
})
})
export const SkillControllers={

createSkill,
getSkills,
getSkill,
updateSkill,
deleteSkill

}