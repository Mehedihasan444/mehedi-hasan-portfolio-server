import mongoose, { model, Schema } from 'mongoose'

// Define the schema for the About section
const PersonalInfoSchema = new Schema({
  shortphoto: { type: String, required: true },
  fullPhoto: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Other'], required: true ,default: 'Single'},
  socialLinks: {
    linkedin: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    github: { type: String },
  },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    website: { type: String },
  },
},{
    timestamps:true
});
// Export the Portfolio model
export const PersonalInfo = model('PersonalInfo', PersonalInfoSchema);


// {
  
//     shortphoto: "",
//     fullPhoto: "",
//     description: "Hello! I'm Mehedi Hasan, a passionate and creative web developer with a keen eye for detail and a deep love for transforming ideas into engaging digital experiences. My journey in the world of web development started with a fascination for the limitless possibilities it offers. I am driven by the belief that the web has the power to connect, inspire, and simplify our lives. My passion lies in crafting seamless and user-friendly websites that not only meet but exceed the expectations of users. I find joy in the process of creating functional and visually appealing solutions that leave a lasting impact.",
//     name: "Mehedi Hasan",
//     age: 23,
//     socialLinks: {
//       linkedin: "https://www.linkedin.com/in/mehedi-hasan-893500301/",
//       facebook: "https://www.facebook.com/mehedihasan67705251",
//       twitter: "https://www.twitter.com/MEHEDIH60833052",
//       github: "https://github.com/Mehedihasan444",
//     },
//     contactInfo: {
//       phone: "+8801767705251",
//       email: "mehedihasan67705251@gmail.com",
//       location: "Dhaka, Bangladesh",
//       website: "",
//     }
// }


// // Combine all schemas into a main Portfolio schema
// const PortfolioSchema = new mongoose.Schema({
//   about: AboutSchema,
//   skills: [SkillSchema],
//   professionalExperience: [ProfessionalExperienceSchema],
//   education: [EducationSchema],
//   projects: [ProjectSchema],
//   posts: [PostSchema],
// });

// // Export the Portfolio model
// module.exports = mongoose.model('Portfolio', PortfolioSchema);
