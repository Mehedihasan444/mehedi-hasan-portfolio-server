import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { Blog } from "./blog.model";
import sendResponse from "../../utils/sendResponse";

const createBlog = catchAsync(async (req, res) => {
    const blog = await Blog.create(req.body);
    console.log(blog)

    sendResponse(res,{
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog created successfully',
        data: blog,

    });
})


const getBlogs = catchAsync(async (req, res) => {
    const blogs = await Blog.find();

    sendResponse(res,{
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blogs fetched successfully',
        data: blogs,

    });
})

const getBlog = catchAsync(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    sendResponse(res,{
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog fetched successfully',
        data: blog,

    });
})



const  updateBlog = catchAsync(async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog updated successfully',
        data: blog,
    })
})


const deleteBlog = catchAsync(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog deleted successfully',
        data: null,
    })
})


export const BlogControllers = {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
}