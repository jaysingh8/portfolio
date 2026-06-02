import React from 'react'

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws
} from "react-icons/fa"

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiKubernetes,
  SiPostman
} from "react-icons/si"

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-black
        text-white
        
      "
    >
      <div className="max-w-7xl mx-auto">

    
        <div className="text-center mb-16">

          <p className="
            text-gray-400
            text-sm
            tracking-[4px]
            uppercase
            mb-3
          ">
            Skills
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-semibold
          ">
            Technologies I Use
          </h2>

        </div>

    
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-5
        ">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-[#111111]
                border
                border-white/10
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                gap-4
                hover:border-white/20
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

        
              <div className="
                text-4xl
                text-gray-300
              ">
                {skill.icon}
              </div>

        
              <h3 className="
                text-sm
                font-medium
                text-gray-300
              ">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills