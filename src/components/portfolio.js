import React from 'react';
import '../style.css';
import petAdoption from "../images/Screen Shot 2022-01-19 at 10.31.54 PM.png";
import codeQuiz from "../images/Screen Shot 2022-01-19 at 11.06.15 PM.png";
import filmFactory from "../images/Screen Shot 2022-02-24 at 4.51.55 PM.png";
import noteTaker from "../images/Screen Shot 2022-02-24 at 4.55.42 PM.png";
import pwGenerator from "../images/Screen Shot 2022-02-24 at 4.54.03 PM.png";

const Portfolio = () => {
    return(
        <article id="work">
                    <div class="left">
                        <h2>Work</h2>
                    </div>
                    
                    <div id="pics" className="right">
                        <div id="row1">
                            <div id="bigbox">
                                <a href="https://lilythomas28.github.io/pet-adoption/" target="_blank" rel="noopener noreferrer">
                                    <img src={petAdoption} alt="pet-adoption project page" />
                                </a>
                                <div className="projectname">
                                    <h3>Pet Adoption</h3>
                                    <p>HTML CSS Javascript</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/pet-adoption.git">Github</a>
                                </div>
                            </div>
                        </div>
                        
                        <div id="row2">
                            <div className="regbox">
                                <a href="https://lilythomas28.github.io/code-quiz/" target="_blank" rel="noopener noreferrer">
                                    <img id="imgpro2" src={codeQuiz} alt="code-quiz homework page" />
                                </a>
                                <div className="projectname">
                                    <h3>Code Quiz</h3>
                                    <p>HTML CSS Javascript</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/code-quiz.git">Github</a>
                                </div>
                            </div>
                            <div className="regbox">
                                <a href="https://film-factory.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={filmFactory} alt="film factory home page" />
                                </a>
                                <div className="projectname">
                                    <h3>Film Factory</h3>
                                    <p>Js CSS Handlebars etc.</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/Flim-Factory.git">Github</a>
                                </div>
                            </div>
                        </div>

                        <div id="row3">
                            <div className="regbox">
                                <a href="https://shrouded-badlands-92244.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={noteTaker} alt="note taker home page" />
                                </a>
                                <div className="projectname">
                                    <h3>Note Taker</h3>
                                    <p>JavaScript CSS Express.js</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/note-taker.git">Github</a>
                                </div>
                            </div>
                            <div className="regbox">
                                <a href="https://lilythomas28.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
                                    <img src={pwGenerator} alt="password generator main page" />
                                </a>
                                <div className="projectname">
                                    <h3>Password Generator</h3>
                                    <p>JavaScript CSS HTML</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/password-generator.git">Github</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </article>
    );
};

export default Portfolio;