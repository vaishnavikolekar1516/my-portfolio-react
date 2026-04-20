import React from 'react'
import './MyWork.css'
import Portfolio from '../../assets/img_4.png'
import ToDoApp from '../../assets/ToDo-app2.png'
import LMS from '../../assets/LMS.png'

const MyWork = () => {

  const projects = [
    {
      img: Portfolio,
      title: "Portfolio Website",
      tech: ["React", "CSS", "Responsive"],
      github: "https://github.com/vaishnavikolekar1516/my-portfolio-react",
      live: "https://vaishnavikolekar-portfolio.vercel.app/"
    },
    {
      img: ToDoApp,
      title: "To Do Application",
      tech: ["React", "LocalStorage"],
      github: "https://github.com/vaishnavikolekar1516/to-do-app",
      live: "https://to-do-app-kohl-eight.vercel.app/"
    },
    {
      img: LMS,
      title: "Learning Management System",
      tech: ["MongoDB", "Express", "React", "Node"],
      github: "https://github.com/vaishnavikolekar1516/LMS",
      live: "https://codesphere-lms.vercel.app/"
    }
  ]

  return (
    <section id='work' className='section'>
      <div className='container'>

        <div className='work-header'>
          <h2>My Projects</h2>
          <p>Here are some of the projects I have built recently.</p>
        </div>

        <div className='projects-grid'>

          {projects.map((project, index) => (
            <div className='project-card' key={index}>

              <img src={project.img} alt={project.title} />

              <div className='project-content'>
                <h3>{project.title}</h3>

                <div className='tech-tags'>
                  {project.tech.map((item, i) => (
                    <span className='tag' key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">

                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className='project-btn'
                >
                  View on GitHub
                </a>

                <a 
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className='project-btn live'
                >
                  Live Demo
                </a>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default MyWork