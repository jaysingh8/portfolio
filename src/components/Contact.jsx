import React from 'react'

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa"

const Contact = () => {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-semibold
            mb-4
          ">
            Let's Work Together
          </h2>

          <p className="
            text-gray-400
            text-[15px]
            max-w-2xl
            mx-auto
            leading-relaxed
          ">
            Available for internships
            and software engineering opportunities.
          </p>

        </div>

        <div className="
          bg-[#111111]
          border
          border-white/10
          rounded-3xl
          p-8
          md:p-12
        ">

          <div className="
            grid
            md:grid-cols-2
            gap-12
            items-center
          ">

            <div>

              <h3 className="
                text-2xl
                font-medium
                mb-5
              ">
                Get In Touch
              </h3>

              <p className="
                text-gray-400
                text-[15px]
                leading-relaxed
                mb-8
              ">
                I enjoy building modern full-stack
                applications and solving real-world
                problems through code.
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
                  Open To Work
                </span>

              </div>

            </div>

            <div className="space-y-5">

              <div className="
                flex
                items-center
                gap-4
                bg-black/30
                border border-white/10
                rounded-2xl
                p-5
              ">

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  text-gray-300
                ">
                  <FaEnvelope size={18} />
                </div>

                <div>
                  <p className="
                    text-sm
                    text-gray-500
                    mb-1
                  ">
                    Email
                  </p>

                  <h4 className="
                    text-[15px]
                    font-normal
                  ">
                    jaysinghrajput265@gmail.com
                  </h4>
                </div>

              </div>

              <div className="
                flex
                items-center
                gap-4
                bg-black/30
                border border-white/10
                rounded-2xl
                p-5
              ">

                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  text-gray-300
                ">
                  <FaPhoneAlt size={16} />
                </div>

                <div>
                  <p className="
                    text-sm
                    text-gray-500
                    mb-1
                  ">
                    Phone
                  </p>

                  <h4 className="
                    text-[15px]
                    font-normal
                  ">
                    +91 9351321012
                  </h4>
                </div>

              </div>

              <div className="flex gap-4 pt-2">

                <a
                  href="https://github.com/jaysingh8"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-black/30
                    border border-white/10
                    flex items-center justify-center
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/jay-singh-rajput"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-black/30
                    border border-white/10
                    flex items-center justify-center
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact