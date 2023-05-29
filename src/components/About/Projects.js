import styled from "styled-components";

import { projectData } from "../utils/data";

function Projects({handleScroll}) {

    function ChooseButton({exception}) {
        return (exception ?
            <ProjectButton onClick={() => handleScroll("contact")}>Contact For Details</ProjectButton>
            : <ProjectButton>Demo Video</ProjectButton>
        )
    }

    function ProjectCard({title, description, demoVideo, image, alt, exception}) {
        return(
            <StyledProjectCard>
                <ProjectImg src={image} alt={alt} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={demoVideo}>
                    <ChooseButton exception={exception} />
                </a>
            </StyledProjectCard>
        )
    }

  return (
    <StyledProjects>
        <h2>Projects</h2>
        <ProjectWrapper>
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
            )) }
        </ProjectWrapper>
    </StyledProjects>
  );
}

export default Projects;

const StyledProjects = styled.div`
    text-align: center;
    margin-top: 120px;

    @media only screen and (max-width: 650px) {
        margin-top: 70px;
    }
`;

const ProjectWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > p {
        margin-bottom: 15px;
        font-size: 18px;
    }

    & > h3 {
        margin-top: 15px;
        margin-bottom: 10px;
        font-family: 'Source Sans Pro', sans-serif;
    }

    @media only screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

const StyledProjectCard = styled.div`
    flex: 1;
    height: 350px;
    margin: 20px;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);

    @media only screen and (max-width: 650px) {
        margin: 20px 0;
    }
`;

const ProjectImg = styled.img`
    width: 220px;
    border-radius: 15px;
`;

const ProjectButton = styled.button`
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 5px 10px;
    background-color: #1d39d7eb;
  
    &:hover {
        transform: scale(1.06) perspective(1px);
        cursor: pointer;
    }
`;
