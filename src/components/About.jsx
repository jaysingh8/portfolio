import React from 'react'
import Profile from '../assets/profile.jpeg'

const About = () => {
  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        
      "
    >
      <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-16
        items-center
      ">

        <div className="flex justify-center">

          <div className="
            w-[300px]
            h-[340px]
            overflow-hidden
            rounded-3xl
            border
            border-white/10
          ">

            <img
              src={Profile}
              alt="about"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </div>

    
        <div>

          <p className="
            text-gray-400
            text-sm
            tracking-[4px]
            uppercase
            mb-4
          ">
            About Me
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-semibold
            leading-tight
            mb-6
          ">
            Passionate Full Stack Developer
          </h2>

          <p className="
            text-gray-400
            text-[15px]
            leading-relaxed
            mb-5
          ">
           Software Engineering undergraduate specializing in Full-Stack MERN development with hands-on experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in RESTful API development, JWT authentication, real-time communication with Socket.io, and responsive UI design. Solved 150+ DSA problems on LeetCode with strong understanding of OOPs, DBMS, and Data Structures & Algorithms. Seeking Software Engineer or Full-Stack Developer opportunities to build high-performance applications.
          </p>

        
          <div className="flex flex-wrap gap-3">

            <span className="
              px-4 py-2
              rounded-full
              text-sm
              bg-white/5
              border border-white/10
              text-gray-300
            ">
              MERN Stack
            </span>

            <span className="
              px-4 py-2
              rounded-full
              text-sm
              bg-white/5
              border border-white/10
              text-gray-300
            ">
              Full Stack
            </span>

            <span className="
              px-4 py-2
              rounded-full
              text-sm
              bg-white/5
              border border-white/10
              text-gray-300
            ">
              Problem Solving
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About