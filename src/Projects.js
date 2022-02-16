function Projects({handleScroll}) {
  return (
    <div id="projects">
        <h2>Projects</h2>
        <div id="project-wrapper">
            <div className="project-card flex-one">
                <img className="project-img" src="/images/350.png" alt="Preview of fundraising site" />
                <h3>Nonprofit Fundraising</h3>
                <p>Custom full-stack site for 350 Bay Area. 261+ donations raised $105k+ in 50 hours.</p>
                <a href="https://vimeo.com/676468108/d0e7173b99"><button className="project-btn">Demo Video</button></a>
            </div>
            <div className="project-card flex-one">
                <img className="project-img" src="/images/quiz-game.png" alt="Preview of quiz game app" />
                <h3>Themed Quiz Game</h3>
                <p>Jeopardy-inspired quiz game testing player’s general knowledge.</p>
                <a href="https://vimeo.com/670021116/8d9ee7485e"><button className="project-btn">Demo Video</button></a>
            </div>
            <div className="project-card flex-one">
                <img className="project-img" src="/images/calculator.png" alt="Preview of Big O calculator app" />
                <h3>Big O Calculator</h3>
                <p>Estimates time complexity of code & reveals costly code for new devs learning DSA.</p>
                <a href="https://vimeo.com/manage/videos/678435571/c0c7bd34f1"><button className="project-btn">Demo Video</button></a>
            </div>
            <div className="project-card flex-one">
                <img className="project-img" src="/images/med-reminders.png" alt="Preview of med reminder project" />
                <h3>Med Reminders</h3>
                <p>Twilio + Chron Jobs to enable automated med reminder calls for my mother.</p>
                <button className="project-btn" onClick={() => handleScroll("contact")}>Contact For Details</button>
            </div>
        </div>
    </div>
  );
}

export default Projects;