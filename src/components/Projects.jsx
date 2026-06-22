import React from 'react'
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Social Media App",
    description:
      "MERN social media platform with authentication, real-time chat, likes, comments, and follow system using Socket.io.",
    tech: ["React.js", "MongoDB", "Socket.io", "Node.js","Express.js"],
    github: "https://github.com/jaysingh8/social-media-app",
    liveLink:"https://social-media-frontend-gules-five.vercel.app/"
  },{
    title:"Clothy",
    description:"Clothy is a modern fashion e-commerce platform that allows users to browse, search, and purchase trendy clothing and accessories online. It offers a seamless shopping experience with features like user authentication, product filtering, cart management, wishlist, and secure checkout, all within a responsive and user-friendly interface.",
    tech:["React.js","TailwindCss","MongoDB","Node.js","Express.js","Google oauth","Express-validator","Passport.js"],
    github: "https://github.com/jaysingh8/Clothy-frontend",
    liveLink:"https://clothy-frontend-mu.vercel.app/"

  },

  {
    title: "NASA Clone",
    description:
      "Responsive NASA-inspired landing page clone built using HTML, CSS, and JavaScript with modern UI sections and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jaysingh8/NASA-CLONE.",
  },

  {
    title: "Rajasthan Royals Website",
    description:
      "Cricket team themed responsive website with modern UI built using HTML, Tailwind CSS, and JavaScript.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/jaysingh8/rajasthan-royals-",
  },

 

  
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-black
        text-white
        
      "
    >
      <div className="max-w-6xl mx-auto">

      
        <div className="text-center mb-16">

          <p className="
            text-gray-400
            text-sm
            tracking-[4px]
            uppercase
            mb-3
          ">
            Portfolio
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-semibold
          ">
            Featured Projects
          </h2>

        </div>
        <div className="grid md:grid-cols-2 gap-7">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-3xl
                p-7
                hover:border-white/20
                transition-all
                duration-300
              "
            >

          
              <div className="
                flex
                items-start
                justify-between
                mb-5
              ">

                <h3 className="
                  text-2xl
                  font-medium
                ">
                  {project.title}
                </h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-gray-500
                    hover:text-white
                    transition
                  "
                >
                  <FaGithub size={20} />
                </a>

               <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-gray-500
                    hover:text-white
                    transition
                  "
                >
                 Live Link
                </a>
              </div>

            
              <p className="
                text-gray-400
                text-[15px]
                leading-relaxed
                mb-6
              ">
                {project.description}
              </p>

            
              <div className="flex flex-wrap gap-2">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects