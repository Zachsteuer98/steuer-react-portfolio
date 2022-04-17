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
        <h6 id="about" className="about"> After completing a Coding Bootcamp at the University of Connectiuct, I have developed a
          passion for backend web development. The Technologies I am strongest in Include SQL, MongoDB, GraphQL, Express, and Node.js.
          Starting in August of 2022, I will be interning in Tel Aviv, Israel to develop my skills as a web developer. I am hopeful that through this experience I will gain deeper knowledge of web development. This opportunity will will enhance my teamworking skills. If you would like to see some of my current work, please check out my Portfolio page.</h6>
      </div>
    </section>
  );
}

export default About;