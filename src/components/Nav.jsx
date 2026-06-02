import React from 'react'

const Nav = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="
      w-full
      bg-black/80
      backdrop-blur-md
      border-b border-white/10
      text-white
      px-8
      py-5
      fixed
      top-0
      z-50
    ">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="
          text-2xl
          font-semibold
          tracking-wide
          cursor-pointer
        ">
          Jay Singh<span className="text-gray-500">.</span>
        </h1>

        <ul className="
          hidden
          md:flex
          items-center
          gap-10
          text-[15px]
          font-normal
        ">

          <li
            onClick={() => scrollToSection("home")}
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
            "
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("skills")}
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Skills
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Projects
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="
              text-gray-400
              hover:text-white
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Contact
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Nav