import React from 'react';
import resume from './assets/images/resume.png'
import resumedoc from './assets/files/resume.docx'

function Resume() {

    return (
        <section>
            <div className="margin-bottom">
                <div>
                    <div className="row justify-content-evenly">
                        <img src={resume} alt="resume for Zachary Steuer" className="resumeImage"></img>
                    </div>
                    <div className="justify-content-evenly">
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info col-sm-4 download-button" ><a href={resumedoc}>Download Resume</a></button>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="about-div">
                        <h3 className="row justify-content-evenly">Front-End Proficiencies</h3>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className="about">
                            <ol>
                                <li><h5>HTML</h5></li>
                                <li><h5>CSS</h5></li>
                                <li><h5>javaScript</h5></li>
                                <li><h5>jQuery</h5></li>
                                <li><h5>responsive design</h5></li>
                                <li><h5>React</h5></li>
                                <li><h5>Bootstrap</h5></li>
                            </ol>
                            <h3>Back-end Proficiencies</h3>
                            <ol>
                                <li><h5>APIs</h5></li>
                                <li><h5>Node</h5></li>
                                <li><h5>Express</h5></li>
                                <li><h5>MySQL, Sequalize</h5></li>
                                <li><h5>MongoDB, Mongoose</h5></li>
                                <li><h5>REST</h5></li>
                                <li><h5>GraphQL</h5></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume