import React from 'react';
import 'bootstrap';
import reciperepo from './assets/images/recipe-repo.png';
import socialMediaAPI from './assets/images/social-media-API.png';
import employeedatabase from './assets/images/employee-database.png';
import Ecommerce from './assets/images/e-commerce.jpg';
import techblog from './assets/images/techblog.png';
import weather from './assets/images/weather-dashboard.png';

function Portfolio({ currentCategory }) {


  return (
    <section>
      <div className="container-md">
        <div className="row">
          <div className="col-md-4 content-spacing">
            <h4>Recipe Repo (Full-Stack (SQL))</h4>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/"><h6>Web</h6></a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/Zachsteuer98/Recipe-Repo-.git"><h6>Git</h6></a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h4>Social Media API (MongoDB)</h4>
            <img src={socialMediaAPI} alt='This is a social media API using Express.js, Mongoose, and MongoDB' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://drive.google.com/file/d/11t2EZgzmwpPozgxF63pwPrKX74YtwNnq/view"><h6>Video</h6></a>
              <a className="btn btn-info col-sm-4" href="https://github.com/Zachsteuer98/social-media-API.git"><h6>Git</h6></a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h4>Employee Database (SQL)</h4>
            <img src={employeedatabase} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://drive.google.com/file/d/1hcxXvlao6V4I8K4C6dFYvDckfysrpF0C/view"><h6>Video</h6></a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/Zachsteuer98/Employee-database.git"><h6>Git</h6></a>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-4 content-spacing">
            <h4>E-Commerce API (SQL)</h4>
            <img src={Ecommerce} alt='E-Commerce Backend Utilizing SQL Database and Express Servers' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://drive.google.com/file/d/1yAj7VdDoZNyKIn6ozq0kToOhA-t7T81-/view">Video</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/Zachsteuer98/E-Commerce-Backend.git">Git</a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h4>Weather Dashboard (OpenWeather API)</h4>
            <img src={weather} alt='weather dashboard page' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://zachsteuer98.github.io/Weather-Appliction/">Web</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/Zachsteuer98/Weather-Appliction.git">Git</a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h4>Tech Blog</h4>
            <img src={techblog} alt='Tech blog Website' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://immense-ridge-93447.herokuapp.com/">Web</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/Zachsteuer98/Tech-Blog.git">Git</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;