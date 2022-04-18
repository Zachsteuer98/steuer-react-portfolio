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
                <button className="btn btn-info col-sm-4 download-button" ><a href={resumedoc}>Download Resume</a></button>
                </div>
            </div>
        </section>
    )
}

export default Resume