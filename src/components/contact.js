import React from 'react';
import '../style.css';

const Contact = () => {
    return (
        <div>
            <div>
                <h1 style={{color: "#3f8d59"}}>Contact Me</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="tel:6193411177">(619)341-1177</a> 
                    </li>
                    <li>
                        <a href="lilylynettethomas@gmail.com">lilylynettethomas@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://github.com/LilyThomas28" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="www.linkedin.com/in/lily-thomas-828226225/" target="_blank" rel="noopener">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Contact;