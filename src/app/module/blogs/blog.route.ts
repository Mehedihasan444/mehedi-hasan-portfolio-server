
import express from 'express';
import { BlogControllers } from './blog.controller';
const router=express.Router();

router.post('/',BlogControllers.createBlog)
router.get('/',BlogControllers.getBlogs);
router.get('/:id',BlogControllers.getBlog);
router.put('/:id',BlogControllers.updateBlog);
router.delete('/:id',BlogControllers.deleteBlog);

export const BlogRoutes=router;