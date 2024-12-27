import { catchAsync } from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { Experience } from "./experience.model"



const createExperience = catchAsync(async (req, res) => {
const experience = await Experience.create(req.body)
sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience created successfully',
    data: experience,

})
})

const getExperiences = catchAsync(async (req, res) => {
const experience = await Experience.find()
sendResponse(res, {
    statusCode: 200,
    success: true,
    data: experience,
})
})

const getExperience = catchAsync(async (req, res) => {
const experience = await Experience.findById(req.params.id)
    sendResponse(res, {
    statusCode: 404,
    success: false,
    message: 'Experience not found',
    data: experience,
    })
})


const updateExperience = catchAsync(async (req, res) => {
const experience = await Experience.findByIdAndUpdate(req.params.id, req.body)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience updated successfully',
    data: experience,
})
})


const deleteExperience = catchAsync(async (req, res) => {
const experience = await Experience.findByIdAndDelete(req.params.id)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience deleted successfully',
    data: experience,
})
})
export const ExperienceControllers={

createExperience,
getExperiences,
getExperience,
updateExperience,
deleteExperience

}