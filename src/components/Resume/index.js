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
                <div className= "justify-content-evenly">
                <button className="btn btn-info col-sm-4 download-button" ><a href={resumedoc}>Download Resume</a></button>
                </div>
                </div>
                <div className="resume-content row  justify-content-evenly resume">
                    <h3>Front-End Proficiencies</h3>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>javaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ol>
                    <h3>Back-end Proficiencies</h3>
                    <ol>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequalize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Resume