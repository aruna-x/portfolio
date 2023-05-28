import { projectData } from "../utils/data";

function Projects({handleScroll}) {

    function ChooseButton({exception}) {
        return (exception ?
            <button className="project-btn" onClick={() => handleScroll("contact")}>Contact For Details</button>
            : <button className="project-btn">Demo Video</button>
        )
    }

    function ProjectCard({title, description, demoVideo, image, alt, exception}) {
        return(
            <div className="project-card flex-one">
                <img className="project-img" src={image} alt={alt} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={demoVideo}>
                    <ChooseButton exception={exception} />
                </a>
            </div>
        )
    }

  return (
    <div id="projects">
        <h2>Projects</h2>
        <div id="project-wrapper">
            { projectData.map(p => (
                <ProjectCard 
                    key={p.title}
                    title={p.title} 
                    description={p.description} 
                    demoVideo={p.demoVideo} 
                    image={p.image} 
                    alt={p.alt} 
                    exception={p.title === "Med Reminders"}
                />
            ))
            }
        </div>
    </div>
  );
}

export default Projects;
