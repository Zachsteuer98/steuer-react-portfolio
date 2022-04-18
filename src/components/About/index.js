import React from 'react';
import image from './assets/images/profile-pic.jpg'

function About() {

  return (

    <section className= "profile-page">
      <div>
        <div className="image-div row justify-content-evenly">
          <img className="profile-pic" src={image} alt="Zachary Steuer on a boat"></img>
        </div>
      </div>
      <br></br>
      <div className="row justify-content-evenly">
        <div className="about-div">
          <h4 className= "about-title">About Zachary</h4>
        </div>
        <h6 id="about" className="about"> After completing my undergraduate work at Salve Regina University, earning a degree in Global Business and Economics, I wanted to expand upon my growing interest in technology.  I enrolled in a Coding Bootcamp at the University of Connecticut, that has helped me to develop a
          greater passion for back-end web development. The technologies I am strongest in include SQL, MongoDB, GraphQL, Express, and Node.js.
          Starting in August of 2022, I will be interning in Tel Aviv, Israel to expand upon my skills in web development. By working abroad, I am confident that it will allow me to enhance my teamworking skills. Throuhout my lifetime, teamwork has played an intricate part in my development as an athlete. I am confident these skills will carry over into my career. <br></br> <br></br>In my free time, I coach/race competitively in boats such as Lasers, Lightnings, FJ's, and on my own boat Persistence (A Tartan 27). I also enjoy playing various instruments including the Piano, Bass Guitar, and the Harmonica. If you would like to see some of my current work, please check out my Portfolio page.</h6>
      </div>
    </section>
  );
}

export default About;