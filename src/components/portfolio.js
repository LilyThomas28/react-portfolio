import React from 'react';

const Portfolio = () => {
    return(
        <article id="work">
                    <div class="left">
                        <h2>Work</h2>
                    </div>
                    
                    <div id="pics" class="right">
                        <div id="row1">
                            <div id="bigbox">
                                <a href="https://lilythomas28.github.io/pet-adoption/" target="_blank" rel="noopener">
                                    <img src="./images/Screen Shot 2022-01-19 at 10.31.54 PM.png" alt="pet-adoption project page" />
                                </a>
                                <div class="projectname">
                                    <h3>Pet Adoption</h3>
                                    <p>HTML CSS Javascript</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/pet-adoption.git">Github</a>
                                </div>
                            </div>
                        </div>
                        
                        <div id="row2">
                            <div class="regbox">
                                <a href="https://lilythomas28.github.io/code-quiz/" target="_blank" rel="noopener">
                                    <img id="imgpro2" src="./images/Screen Shot 2022-01-19 at 11.06.15 PM.png" alt="code-quiz homework page" />
                                </a>
                                <div class="projectname">
                                    <h3>Code Quiz</h3>
                                    <p>HTML CSS Javascript</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/code-quiz.git">Github</a>
                                </div>
                            </div>
                            <div class="regbox">
                                <a href="https://film-factory.herokuapp.com/" target="_blank" rel="noopener">
                                    <img src="./images/Screen Shot 2022-02-24 at 4.51.55 PM.png" alt="film factory home page" />
                                </a>
                                <div class="projectname">
                                    <h3>Film Factory</h3>
                                    <p>Js CSS Handlebars etc.</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/Flim-Factory.git">Github</a>
                                </div>
                            </div>
                        </div>

                        <div id="row3">
                            <div class="regbox">
                                <a href="https://shrouded-badlands-92244.herokuapp.com/" target="_blank" rel="noopener">
                                    <img src="./images/Screen Shot 2022-02-24 at 4.55.42 PM.png" alt="note taker home page" />
                                </a>
                                <div class="projectname">
                                    <h3>Note Taker</h3>
                                    <p>JavaScript CSS Express.js</p>
                                    <a id="project-links" href="https://github.com/LilyThomas28/note-taker.git">Github</a>
                                </div>
                            </div>
                            <div class="regbox">
                                <a href="https://lilythomas28.github.io/password-generator/" target="_blank" rel="noopener">
                                    <img src="./images/Screen Shot 2022-02-24 at 4.54.03 PM.png" alt="password generator main page" />
                                </a>
                                <div class="projectname">
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