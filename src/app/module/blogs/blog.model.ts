
import  { model, Schema } from 'mongoose'


// Define the schema for the Posts section
const BlogSchema = new Schema({
  display: { type: Boolean, default: true },
  images: [{ type: String }],
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: String }],
},{
    timestamps:true
});

// Export the Portfolio model
export const Blog = model('Blog', BlogSchema);
