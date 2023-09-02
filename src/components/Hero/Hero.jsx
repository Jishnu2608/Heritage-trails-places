import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Tourist Places
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"Traveling is a symphony of senses, where each place is a note that resonates with the 
                       melodies of our soul. With every step, we compose a life enriched by diverse horizons and shared stories."</span>
                       <span className="secondaryText"><i>~ Helen Keller</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-places-hero-img.jpg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero