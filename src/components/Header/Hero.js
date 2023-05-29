import styled from "styled-components";

import '../../style/enso.css';

function Hero() {

    function RenderCircle(num){
        return (
            <div id="overlay" className={`circle${num}`}> 
                <div className={`inner rotating circle${num}`}></div> 
            </div> 
        )
    }

  return (
    <StyledHero>
        <Animation>
            {[1,2,3].map(num => RenderCircle(num))}
            <div id="overlay" className="circle3"> 
                <div className="circle3">
                    <NameContainer>
                        <h1>Aruna Evan</h1>
                        <JobTitle href="https://www.linkedin.com/in/aruna-x/">Software Engineer</JobTitle>
                    </NameContainer>
                </div>
            </div> 
        </Animation>          
    </StyledHero>
  );
}

export default Hero;

const StyledHero = styled.div`
    margin: auto auto;
    padding-top: 25px;
    height: 70vh;   
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Animation = styled.div`
    width: 100%;
`;

const NameContainer = styled.div`  
    padding-top: 140px;
    flex-direction: column;
    color: white;
    margin: auto auto;
    text-align: center;
`;
  
const JobTitle = styled.a`
    text-decoration: none;
    line-height: 1;
    position: relative;
    z-index: 0;
    display: inline-block;
    padding: 5px 5px;
    overflow: hidden;
    vertical-align: bottom;
    color: white;
    transition: color .3s ease-out;
    margin-top: 0px;
    font-size: 30px;
    border-radius: 5px;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        transform: translateY(calc(100% - 2px));
        width: 100%;
        height: 100%;
        background-image: linear-gradient(60deg, #fc5f5cbd 0%, #fbde6abd 25%, #76fb6abd 50%, #6aa4fbbd 75%, #cb6afbbd 100%);
        transition: transform .25s ease-out;
    }
    
    &:hover::before {
        transform: translateY(0);
        transition: transform .25s ease-out;
    }
`;
