function Hero() {

    function RenderCircle(num){
        return (
            <div id="overlay" className={`circle${num}`}> 
                <div className={`inner rotating circle${num}`}></div> 
            </div> 
        )
    }
    
  return (
    <div id="hero">
        <div id="animation">
        {[1,2,3].map(num => RenderCircle(num))}
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