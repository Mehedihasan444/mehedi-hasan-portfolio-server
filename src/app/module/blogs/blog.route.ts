
import express from 'express';
import { BlogControllers } from './blog.controller';
import { requireAdmin } from '../../middleware/requireAdmin';
const router=express.Router();

router.post('/', requireAdmin, BlogControllers.createBlog)
router.get('/',BlogControllers.getBlogs);
router.get('/:id',BlogControllers.getBlog);
router.put('/:id', requireAdmin, BlogControllers.updateBlog);
router.delete('/:id', requireAdmin, BlogControllers.deleteBlog);

export const BlogRoutes=router;