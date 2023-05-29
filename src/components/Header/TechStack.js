import styled from 'styled-components';

import { techIconData } from '../utils/data';

import '../../style/techImgs.css';

function TechStack() {
  function TechIcon({i}) {
      return (
        <a href={i.link} target="_blank">
          <TechImg id={i.id} src={i.src} alt={i.alt} title={i.title} />
        </a>
      )
  }

  return (
    <StyledTechStack>
      { techIconData.map(i => <TechIcon key={i.id} i={i} />) }
    </StyledTechStack>
  );
}

export default TechStack;

const StyledTechStack = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  margin: auto auto;
  justify-content: space-between;
  max-width: 75%;
  padding: 20px auto;
  
  & > *:hover {
    margin-top: -7px;
    padding-bottom: 7px;
  }

  @media only screen and (max-width: 650px) {
    visibility: hidden;
  }
`;

const TechImg = styled.img`
  height: 50px;
  opacity: .7;
  transition: all .1s;
`;
