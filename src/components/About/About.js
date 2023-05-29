import styled from "styled-components";

function About() {
  return (
    <StyledAbout>
      <h2>About</h2>
      <Headshot src="/portfolio/images/headshot.jpg" alt="Aruna Evan" />
      <p>Software Engineer invested in collaboration, dedication and empathy. Trained in designing, building, deploying, and maintaining full-stack web apps using React, Ruby on Rails, and Javascript-based programming. Passionate about exercising strong intellectual curiosity and attention to detail to the benefit of a company’s vision and to improve the human experience through technological innovation and solutions.</p>
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
