import styled from "styled-components";

function About() {
  return (
    <StyledAbout id="about">
      <h2>About</h2>
      <Headshot src="/portfolio/images/headshot.jpg" alt="Aruna Evan" />
      <p>I am an exceptional Software Engineer driven by a deep sense of collaboration, unwavering dedication, and genuine empathy. My expertise lies in the intricate art of designing, engineering, deploying, and maintaining full stack web applications, employing the remarkable power of React, Ruby on Rails, and various JavaScript-based programming languages. With an insatiable thirst for knowledge and an unyielding commitment to precision, I consistently channel my passion to propel a company's vision forward, revolutionizing the human experience through groundbreaking technological innovation and creative solutions.</p>
      <p><em><strong>Tech Stack:</strong> React, React Native, Javascript, Node.js, Express.js, Ruby on Rails, Angular.js, Python, Redux, Styled Components, Storybook, Apollo GraphQL, Heroku, PostgreSQL, Redis, Active Record, SQL, Git, Jest, Detox, Cypress, CSS3, HTML5, Xcode, Android Studio, CircleCi / CICD, Atomic Design, Stripe.js</em></p>
    </StyledAbout>
  );
}

export default About;

const StyledAbout = styled.div`
  padding-top: 100px;
  font-size: 23px;

  @media only screen and (max-width: 650px) {
    padding-top: 70px;
    text-align: center;
    font-size: 26px;
  }
`;

const Headshot = styled.img`
  max-height: 350px;
  border-radius: 50%;
  margin-left: 45px;
  margin-top: -160px;
  float: right;
  padding: 15px;

  @media only screen and (max-width: 650px) {
    max-width: 90%;
    border-radius: 50%;
    margin: auto auto;
    float: none;
  }
`;
