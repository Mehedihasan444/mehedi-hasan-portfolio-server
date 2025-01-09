import  { model, Schema } from "mongoose";



// Define the schema for the Professional Experience section
const ExperienceSchema = new Schema({
  display: { type: Boolean, default: true },
  post: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
  },
  workingDescription: { type: String, required: true },
  workingTechs: [{ type: String, required: true }],
  startingDate: { type: Date, required: true },
  endingDate: { type: Date },
},{
  timestamps: true,
});



// Export the Portfolio model
export const Experience = model('Experience', ExperienceSchema);


