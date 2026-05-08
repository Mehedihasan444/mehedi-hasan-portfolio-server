import { catchAsync } from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { Education } from "./education.model"
import httpStatus from "http-status";
import AppError from "../../error/AppError";

const createEducation = catchAsync(async (req, res) => {
    const education = await Education.create(req.body)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Education created successfully',
        data: education,

    })
})



const getEducations = catchAsync(async (req, res) => {
    const education = await Education.find()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: education,
    })
})

const getEducation = catchAsync(async (req, res) => {
    const education = await Education.findById(req.params.id)
    if (!education) {
        throw new AppError(httpStatus.NOT_FOUND, "Education not found");
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Education fetched successfully',
        data: education,
    })
})


const updateEducation = catchAsync(async (req, res) => {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    if (!education) {
        throw new AppError(httpStatus.NOT_FOUND, "Education not found");
    }

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Education updated successfully',
        data: education,
    })
})


const deleteEducation = catchAsync(async (req, res) => {
    const education = await Education.findByIdAndDelete(req.params.id)

    if (!education) {
        throw new AppError(httpStatus.NOT_FOUND, "Education not found");
    }

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Education deleted successfully',
        data: education,
    })
})
export const EducationControllers = {

    createEducation,
    getEducations,
    getEducation,
    updateEducation,
    deleteEducation

}