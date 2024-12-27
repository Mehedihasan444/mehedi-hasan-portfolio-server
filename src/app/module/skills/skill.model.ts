import  { model, Schema } from "mongoose";


// Define the schema for the Skills section
const SkillSchema = new Schema({
  icon: { type: String, required: true },
  name: { type: String, required: true },
  details: { type: String, required: true },
},{
    timestamps:true
});


// Export the Portfolio model
export const Skill = model('Skill', SkillSchema);
