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
      github: "https://github.com/vaishnavikolekar1516/portfolio-react"
    },
    {
      img: ToDoApp,
      title: "To Do Application",
      tech: ["React", "LocalStorage"],
      github: "https://github.com/vaishnavikolekar1516/to-do-app"
    },
    {
      img: LMS,
      title: "Learning Management System",
      tech: ["MongoDB", "Express", "React", "Node"],
      github: "https://github.com/vaishnavikolekar1516/LMS"
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

                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className='project-btn'
                >
                  View on GitHub
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default MyWork