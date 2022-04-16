import React from 'react';
import image from './assets/images/profile-pic.jpg'

function About() {
  return (
    
    <section>
        <div className="image-div">
        <img src = {image} alt="Zachary Steuer on a boat"></img>
        </div>
        <br></br>
        <div className="about-div">
            <h4>About Zachary</h4>
        </div>
      <h6 id="about" className="about"> After completing a Coding Bootcamp at the University of Connectiuct, I have developed a
      passion for backend web development. The Technologies I am strongest in Include SQL, MongoDB, GraphQL, Express, and Node.js.
    Starting in August of 2022, I will be interning in Tel Aviv, Israel to develop my skills as a web developer. I am hopeful that through this experience I will gain deeper knowledge of web development. This opportunity will will enhance my teamworking skills. If you would like to see some of my current work, please check out my Portfolio page.</h6>
    </section>
  );
}

export default About;