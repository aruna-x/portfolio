import { techIconData } from '../utils/data';

function TechStack() {
  function TechIcon({i}) {
      return (
        <a href={i.link} target="_blank">
          <img id={i.id} className="tech-icon" src={i.src} alt={i.alt} title={i.title} />
        </a>
      )
  }

  return (
    <div className="flex-row flex-wrap" id="tech-stack-wrapper">
      { techIconData.map(i => <TechIcon key={i.id} i={i} />) }
    </div>
  );
}

export default TechStack;