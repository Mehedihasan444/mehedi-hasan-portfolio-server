import config from "../config";
import { Project } from "../module/projects/project.model";
import { User } from "../module/user/user.model";
import bcryptjs from "bcryptjs";
export const seed = async () => {
  try {

    // const edu = await Project.create(

    //   {
    //   images:[
    //     "https://res.cloudinary.com/dk5b3",
    //     "https://res.cloudinary.com/dk5b3"
    //   ],
    //   title:"Multi-Vendor E-Commerce Platform",
    //   shortDescription: "A full-featured E-Commerce platform for seamless online shopping and vendor management.",
    //   description: "The E-Commerce Application is a dynamic platform designed for customers, vendors, and administrators to interact seamlessly. It allows customers to browse, filter, and purchase products, vendors to manage shops and inventory, and administrators to oversee and moderate the system. Built using modern web technologies like Node.js, Express.js, React.js/Next.js, and PostgreSQL/MongoDB, the platform integrates JWT-based authentication, cloud-based image storage, and secure payment gateways such as Aamarpay or Stripe. The application ensures scalability with paginated APIs, advanced search/filter features, and responsive design for optimal user experience across all devices.",
      
    //   techStack:[
    //     "React","TypeScript","Node.js","Express.js","Prisma","PostgreSQL","Cloudinary","Vercel","Redux","antd","Tailwind CSS","JWT","bcryptjs"
    //   ],
    //   startingDate:"2024-01-01",
    //   endingDate:"2024-01-01",
    //   keyFeatures: [
    //     // Roles and Responsibilities
    //     "Admin can monitor the platform, manage users, and dynamically handle product categories.",
    //     "Vendors can create and manage shops, add/edit products, and view customer reviews.",
    //     "Customers can browse, filter, and purchase products, as well as view order history.",
        
    //     // Product Management
    //     "Vendors can duplicate, edit, and delete products for easier inventory management.",
    //     "Customers can compare up to 3 products within the same category.",
    //     "Related products are displayed on the product details page.",
      
    //     // Cart Management
    //     "Cart supports products from one vendor at a time.",
    //     "Users are warned when adding products from multiple vendors with options to replace or retain the cart.",
      
    //     // Authentication and Authorization
    //     "JWT-based secure login and role-based redirection.",
    //     "Separate sign-up flows for users and vendors.",
    //     "Password reset functionality via email.",
      
    //     // Vendor Dashboard
    //     "Vendors can manage shop details and inventory.",
    //     "Paginated lists for products and order history.",
    //     "Vendors can respond to customer reviews.",
      
    //     // Payment Integration
    //     "Payment gateways support (Aamarpay or Stripe).",
    //     "Coupons can be applied for discounts during checkout.",
      
    //     // Responsive Design
    //     "Fully responsive design for mobile and desktop users.",
      
    //     // Recent Products Feature
    //     "Users can view the last 10 products they interacted with.",
      
    //     // Home Page Functionalities
    //     "Infinite scrolling with advanced filters and search.",
    //     "Priority product display for followed shops.",
    //     "Flash sale section with links to dedicated product pages.",
      
    //     // Order History
    //     "Vendors can view detailed order histories specific to their shop.",
    //     "Customers can access their complete purchase history.",
      
    //     // Comparison Feature
    //     "Comparison of up to 3 products based on attributes like price and ratings.",
    //     "Warning for comparing products from different categories.",
      
    //     // Scalability Features
    //     "Paginated APIs for product listings and order histories.",
    //     "Filters and searches are optimized for large datasets.",
      
    //     // Technical Implementations
    //     "Node.js and Express.js backend with PostgreSQL (Prisma) or MongoDB (Mongoose).",
    //     "React.js or Next.js frontend with Redux or Context API for state management.",
    //     "Cloudinary integration for image storage.",
    //     "Optional use of TypeScript for enhanced development practices."
    //   ]
    //   ,
    //   clientSide:{
    //     repositoryUrl:"https://github.com/Mehedihasan444/marketsphere-frontend",
    //     liveUrl:"https://marketsphere-frontend.vercel.app/"
    //   },
    //   serverSide:{
    //     repositoryUrl:"https://github.com/Mehedihasan444/marketsphere-backend",
    //     liveUrl:"https://marketsphere-backend.vercel.app/"
    //   }
    //   })

    //at first check if the admin exist of not
    const admin = await User.findOne({
      email: config.admin_email,
    });
    if (!admin) {
      console.log("Seeding started...");

      await User.create({
        name: "Mehedi Hasan",
        email: config.admin_email,
        password: await bcryptjs.hash(
          config.admin_password as string,
          Number(config.bcrypt_salt_rounds)
        )
      });
      console.log("Admin created successfully...");
      console.log("Seeding completed...");
    }
  } catch (error) {
    console.log("Error in seeding", error);
  }
};