import { catchAsync } from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { PersonalInfo } from "./personalInfo.model"



const createPersonalInfo = catchAsync(async (req, res) => {
const personalInfo = await PersonalInfo.create(req.body)
sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'PersonalInfo created successfully',
    data: personalInfo,

})
})

const getPersonalInfos = catchAsync(async (req, res) => {
const personalInfo = await PersonalInfo.find()
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'PersonalInfo fetched successfully',
    data: personalInfo,
})
})

const getPersonalInfo = catchAsync(async (req, res) => {
const personalInfo = await PersonalInfo.findById(req.params.id)
    sendResponse(res, {
    statusCode: 404,
    success: false,
    message: 'PersonalInfo not found',
    data: personalInfo,
    })
})


const updatePersonalInfo = catchAsync(async (req, res) => {
const personalInfo = await PersonalInfo.findByIdAndUpdate(req.params.id, req.body)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'PersonalInfo updated successfully',
    data: personalInfo,
})
})


const deletePersonalInfo = catchAsync(async (req, res) => {
const personalInfo = await PersonalInfo.findByIdAndDelete(req.params.id)
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'PersonalInfo deleted successfully',
    data: personalInfo,
})
})
export const PersonalInfoControllers={

createPersonalInfo,
getPersonalInfos,
getPersonalInfo,
updatePersonalInfo,
deletePersonalInfo

}