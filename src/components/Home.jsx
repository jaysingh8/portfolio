import React from 'react'
import Profile from '../assets/profile.jpeg'
import resume from '../../public/SWE_Resume_Template__1_ (5).pdf'
const Home = () => {
  return (
    <section
      id="home"
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
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
      ">

        <div>

          <p className="
            text-gray-400
            text-sm
            tracking-[4px]
            uppercase
            mb-4
          ">
            MERN Stack Developer
          </p>

          <h1 className="
            text-5xl
            md:text-7xl
            font-semibold
            leading-tight
            mb-6
          ">
            Jay Singh
          </h1>

          <p className="
            text-gray-400
            text-[16px]
            leading-relaxed
            max-w-xl
            mb-8
          ">
            I build modern, responsive and scalable full-stack
            web applications using React.js, Node.js,
            Express.js and MongoDB.
          </p>

        
          <div className="flex flex-wrap gap-4">

            

            <a href={resume}
              className="
                border
                border-white/10
                bg-white/5
                hover:bg-white
                hover:text-black
                px-6
                py-3
                rounded-xl
                text-sm
                font-medium
                transition
              "
            >
              Download CV
            </a>

          </div>

        </div>

       
        <div className="flex justify-center">

          <div className="
            relative
            w-[320px]
            h-[320px]
            rounded-full
            overflow-hidden
            border
            border-white/10
          ">

            <img
              src={Profile}
              alt="profile"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Home