import mongoose, { model, Schema } from "mongoose";
import { number } from "zod";

// Define the schema for the Education section
const EducationSchema = new Schema({
  degree: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  result: { type: Number, required: true },
  institution: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
  },
  description: { type: String },
},{
  timestamps: true,
});


// Export the Portfolio model
export const Education = model('Education', EducationSchema);



// {
//   degree:"Bachelor of Science in Computer Science and Engineering"
//   institution:{
//     name:"Daffodil International University",
//     location:"Dhaka",
//     country:"Bangladesh"
//   },
// startDate:"2022-01-01",
// endDate:"2025-12-31",
// result:3.6,
// description:"I am currently pursuing my Bachelor's degree in Computer Science and Engineering from Daffodil International University. I have completed 3 years of my 4-year degree program with a CGPA of 3.6."


// }