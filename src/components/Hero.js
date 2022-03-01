function Hero() {
  return (
    <div id="hero">
        <div id="animation">
        <div id="overlay" className="circle1"> 
            <div className="inner rotating circle1"></div> 
        </div> 
        <div id="overlay" className="circle2"> 
            <div className="inner rotating circle2"></div> 
        </div> 
        <div id="overlay" className="circle3"> 
            <div className="inner rotating circle3"></div>
        </div> 
        <div id="overlay" className="circle3"> 
            <div className="circle3">
            <div id="name-container">
                <h1>Aruna Evan</h1>
                <a id="job-title" href="https://www.linkedin.com/in/aruna-x/">Software Engineer</a>
            </div>
            </div>
        </div> 
        </div>          
    </div>
  );
}

export default Hero;