import React from 'react';
import 'bootstrap'
import reciperepo from './assets/images/recipe-repo.png'

function Portfolio({ currentCategory }) {


  return (
    <section>
      <div className="container-md">
        <div className="row">
          <div className="col-md-4 content-spacing">
            <h3>Recipe Repo</h3>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/"><h6>Web</h6></a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/reggietenk/Recipe-Repo-.git"><h6>Git</h6></a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h3>Recipe Repo</h3>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/"><h6>Web</h6></a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/reggietenk/Recipe-Repo-.git"><h6>Git</h6></a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h3>Recipe Repo</h3>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/">Website</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/reggietenk/Recipe-Repo-.git">Github</a>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
        <div className="col-md-4 content-spacing">
            <h3>Recipe Repo</h3>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/">Website</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/reggietenk/Recipe-Repo-.git">Github</a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h3>Recipe Repo</h3>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/">Website</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/reggietenk/Recipe-Repo-.git">Github</a>
            </div>
          </div>
          <br></br>
          <div className="col-md-4 content-spacing">
            <h3>Recipe Repo</h3>
            <img src={reciperepo} alt='recipe-repo website. Find the best recipes online' />
            <div className="row justify-content-evenly border-radius link-box">
              <a className="btn btn-info col-sm-4" href="https://damp-crag-63651.herokuapp.com/">Website</a>
              <a className="btn btn-info col-sm-4 " href="https://github.com/reggietenk/Recipe-Repo-.git">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;