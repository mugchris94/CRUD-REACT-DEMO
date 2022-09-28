import React from "react";
import Photo from "../icons/Photo.png"; 
import '../css/about-style.css';


const About = () => {
    return ( 
        <div className="about-details">
            <section className="about">
                <div class="main">
                    <img src={Photo} />
                    <div className="about-text">
                        <h1> About Us</h1>
                        <h5> Developer <span>& Designer</span></h5>
                        <p>I am a front-end web developer. i can provide clean code and pixel perfect design. i am also make more & more interactive with web animations.
i can provide clean code and pixel perfect design. i also make the website more & more interactive with web animations.A responsive design
makes your website accessible to all users, regardless of their device.</p>
                    <button type="button">Let's Talk</button>
                    </div>	
                </div>
            </section>
        </div>
     );
}
 
export default About;