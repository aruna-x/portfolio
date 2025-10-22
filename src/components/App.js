import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// import GlobalStyle from './globalStyles';
// import Header from './Header/Header';
// import About from './About/About';
// import Projects from './About/Projects';
// import Contact from './Contact/Contact';

function App() {
  const [width, setWindowWidth] = useState(0);
  
  function updateDimensions() {
    setWindowWidth(() => window.innerWidth);
  }

  useEffect(updateDimensions,[]);

  function handleScroll(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // <GlobalStyle />
  // <Header width={width} handleScroll={handleScroll}/>
  // <StyledContents>
  //   <About/>
  //   <Projects handleScroll={handleScroll}/>
  // </StyledContents>
  // <Contact />


  // --- Simple inline icons (SVG) ---
  const HardHat = (props) => (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v2.5A7.5 7.5 0 0 0 2 18h20a7.5 7.5 0 0 0-3-6.5V9a7 7 0 0 0-7-7Zm-1 2.2V9H7a5 5 0 0 1 4-4.8ZM13 2.2A5 5 0 0 1 17 9h-4V2.2ZM5 13.5V11h14v2.5c1.2 1.1 2 2.7 2 4.5H3c0-1.8.8-3.4 2-4.5Z"/>
    </svg>
  );
  
  const Hammer = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M21 7.5 13.5 0 12 1.5l2.3 2.3-3.8 3.9L8 6.2 6.6 7.6l2.6 2.5-6.9 7 1.6 1.6 7-6.9 2.5 2.6 1.4-1.4-1.5-2.5 3.9-3.8 2.3 2.3L21 7.5Z"/>
    </svg>
  );
  
  const Wrench = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M22 7.1a5.2 5.2 0 0 1-6.8 6.8l-7.7 7.7-3.1-3.1 7.7-7.7A5.2 5.2 0 0 1 22 7.1ZM6.5 21.5l-1.9-1.9-1.1 3 3-1.1Z"/>
    </svg>
  );
  
  const GitHub = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.3 3.4 9.9 8.1 11.5.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9-.7 1.8-1 .1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.4-5.6-6.1 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1a10.3 10.3 0 0 1 5.4 0c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.7 1.1 2.9 0 4.8-2.9 5.8-5.6 6.1.5.4.8 1.1.8 2.2v3.3c0 .4.3.7.8.6 4.7-1.6 8.1-6.2 8.1-11.5A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  );
  
  const Mail = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M2 5h20v14H2V5Zm10 7L3.5 7h17L12 12Z"/>
    </svg>
  );

  return (
    <Page>
      <Card role="region" aria-labelledby="heading">
        <Header>
          <Title id="heading">Aruna Evan · Software Engineer</Title>
          <Pill aria-label="version">v0.1</Pill>
        </Header>
        <Body>
          <Grid>
            <VisualWrap>
              <Visual aria-hidden="true">
                <HardHat />
                <Floating>
                  <Hammer />
                </Floating>
              </Visual>
              <Subtle>
                <Wrench />
                <span>Actively wiring components…</span>
              </Subtle>
            </VisualWrap>

            <div>
              <Headline>Profile Under Construction</Headline>
              <Lead>
                I’m crafting a better user experience here—clean code, fast performance, and
                thoughtful UX. Check back soon for projects, blog posts, and more.
              </Lead>

              <Actions>
                <Button href="mailto:aruna.evan15@gmail.com" aria-label="Email Aruna">
                  <span>Get in touch</span>
                </Button>
                <ButtonSecondary href="https://dev.to/aruna" aria-label="Read blog posts by Aruna">
                  <span>Read the blog</span>
                </ButtonSecondary>
                {/* <div style={{ marginLeft: "auto", display: "inline-flex", gap: 8 }}>
                  <IconButton href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GitHub />
                  </IconButton>
                  <IconButton href="mailto:aruna.evan15@gmail.com" aria-label="Email Aruna">
                    <Mail />
                  </IconButton>
                </div> */}
              </Actions>

              <StatGrid>
                <StatCard>
                  <StatLabel>Focus</StatLabel>
                  <StatValue>Frontend & DX</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>TL;DR Stack</StatLabel>
                  <StatValue>TypeScript · React</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Status</StatLabel>
                  <StatValue>Building the next release</StatValue>
                </StatCard>
              </StatGrid>
            </div>
          </Grid>
        </Body>
      </Card>
    </Page>
  );
}

export default App;

// const StyledContents = styled.div`
//   width: 80vw;
//   margin: auto auto;
//   background-color: white;
// `;

// --- Animations (CSS-only) ---
const wobble = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const bob = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

// --- Layout ---
const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  color: #0f172a; /* slate-900 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
`;

const Card = styled.section`
  width: 100%;
  max-width: 960px;
  background: #fff;
  border: 1px solid #e2e8f0; /* slate-200 */
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(2, 6, 23, 0.06);
`;

const Header = styled.header`
  padding: 20px 24px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: clamp(20px, 2.2vw, 28px);
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const Pill = styled.span`
  font-size: 12px;
  background: #f1f5f9;
  color: #334155;
  padding: 6px 10px;
  border-radius: 999px;
`;

const Body = styled.div`
  padding: 0 24px 24px 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 3fr;
    align-items: center;
  }
`;

const VisualWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (min-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Visual = styled.div`
  position: relative;
  height: clamp(112px, 18vw, 160px);
  width: clamp(112px, 18vw, 160px);
  border-radius: 16px;
  background: #f1f5f9;
  display: grid;
  place-items: center;
  animation: ${wobble} 3s ease-in-out infinite;
`;

const Floating = styled.div`
  position: absolute;
  right: -8px;
  bottom: -8px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(2, 6, 23, 0.08);
  padding: 8px;
  animation: ${bob} 1.8s ease-in-out infinite;
`;

const Subtle = styled.div`
  display: none;
  color: #64748b; /* slate-500 */
  font-size: 14px;
  gap: 8px;
  align-items: center;
  @media (min-width: 900px) { display: flex; }
`;

const Headline = styled.h2`
  font-size: clamp(26px, 3.2vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 8px 0;
`;

const Lead = styled.p`
  color: #475569; /* slate-600 */
  line-height: 1.7;
  margin: 0 0 20px 0;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 14px;
  border: 1px solid transparent;
  background: #0ea5e9; /* sky-500 */
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.25);
  cursor: pointer;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

const ButtonSecondary = styled(Button)`
  background: #f8fafc;
  color: #0f172a;
  border: 1px solid #e2e8f0;
  box-shadow: none;
`;

const IconButton = styled.a`
  display: inline-flex;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  background: #fff;
  text-decoration: none;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 16px;

  @media (min-width: 520px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 14px;
`;

const StatLabel = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #64748b;
  margin: 0 0 6px 0;
`;

const StatValue = styled.p`
  font-size: 14px;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
`;
