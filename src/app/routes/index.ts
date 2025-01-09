
import { Router } from 'express'
import { BlogRoutes } from '../module/blogs/blog.route'
import { EducationRoutes } from '../module/education/education.route'
import { ExperienceRoutes } from '../module/experience/experience.route'
import { PersonalInfoRoutes } from '../module/personalInfo/personalInfo.route'
import { ProjectRoutes } from '../module/projects/project.route'
import { SkillRoutes } from '../module/skills/skill.route'
import { AuthRoutes } from '../module/auth/auth.route'
const router = Router()

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes
    },
    // {
    //     path:"/users",
    //     route : UserRoutes

    // },
    {
        path: "/projects",
        route: ProjectRoutes
    },
    {
        path: "/blogs",
        route: BlogRoutes
    }, {
        path: "/skills",
        route: SkillRoutes

    }, {
        path: "/experience",
        route: ExperienceRoutes
    },
    {
        path: "/education",
        route: EducationRoutes
    }, {
        path: "/personal-info",
        route: PersonalInfoRoutes
    }
]


moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})

export default router