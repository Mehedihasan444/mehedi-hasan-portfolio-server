import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync"
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import sendResponse from "../../utils/sendResponse"
import { Project } from "./project.model"



const createProject = catchAsync(async (req, res) => {  
      console.log(req.body)
    console.log(req.files)
    
    if (req?.files) {
        const images = req?.files;
        const imageUrls = await Promise.all(
            Array.isArray(images) ? images.map(async (image: any) => {
                const imageName = image?.originalname;
                const path = image?.path;
                const { secure_url } = await sendImageToCloudinary(imageName, path);
                return secure_url as string;
            }) : []
        ) as string[];
        req.body.images = imageUrls;
    }


    const project = await Project.create(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project created successfully',
        data: project,

    })
})

const getProjects = catchAsync(async (req, res) => {
    const project = await Project.find()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Project fetched successfully',
        data: project,
    })
})

const getProject = catchAsync(async (req, res) => {
    const project = await Project.findById(req.params.id)
    sendResponse(res, {
        statusCode: 404,
        success: false,
        message: 'Project not found',
        data: project,
    })
})


const updateProject = catchAsync(async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Project updated successfully',
        data: project,
    })
})


const deleteProject = catchAsync(async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Project deleted successfully',
        data: project,
    })
})
export const ProjectControllers = {

    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject

}