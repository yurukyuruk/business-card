import React from "react";

export default function Info() {
    return(
        <div className="info">
            <img src="./photos/ben.jpg" className="my-photo"/>
            <h1 className="my-name">Asli Yuruk</h1>
            <h3 className="my-job">Frontend Developer</h3>
            <h5 className="my-website">https://yurukyuruk.github.io/HTMLtutorial/</h5>
            <div className="buttons">
                <a href="https://mail.google.com/" target="_blank" className="email-button">
                    <img src="./photos/Email.png" className="email-logo"/>
                    <h2 className="email">Email</h2>
                </a>
                <a href="https://www.linkedin.com/in/asli-yuruk-669795151/" target="_blank" className="linkedin-button">
                    <img src="./photos/LinkedIn.png" className="linkedin-logo"/>
                    <h2 className="linkedin">LinkedIn</h2>
                </a>
            </div>
        </div>
    )
}