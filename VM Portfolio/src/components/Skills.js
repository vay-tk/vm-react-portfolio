import React from 'react';

function Skills() {
  return (
    <div id="page3">
      <h3>My <span>strengths</span></h3>
      <h5>
        <span style={{color: "royalblue"}}>skills</span> and
        <span style={{color: "rgb(188, 140, 234)"}}>interests</span>
      </h5>
      <div className="box dev-box">
        <h4>Development</h4>
        <div className="elem-div">
          <img loading="lazy" src="./images/mongodb-min.webp" alt="MongoDB" />
          <img loading="lazy" src="./images/Next.Js.png" alt="Nextjs" />
          <img loading="lazy" src="./images/React-icon.svg.webp" alt="React" />
          <img loading="lazy" src="./images/node-min.webp" alt="Node.js" />
          <img loading="lazy" src="./images/gsap-min.webp" alt="GSAP" />
          <img loading="lazy" src="./images/github-min.webp" alt="GitHub" />
          <img loading="lazy" src="./images/js-min.webp" alt="JavaScript" />
          <img loading="lazy" src="./images/css-min.webp" alt="CSS" />
          <img loading="lazy" src="./images/html-min.webp" alt="HTML" />
        </div>
      </div>
      <div className="box des-box">
        <h4>Designing</h4>
        <div className="elem-div">
          <img src="./images/illus.png" alt="Illustration" />
          <img className="figmaimg" src="./images/figma-min.webp" alt="Figma" />
        </div>
      </div>
    </div>
  );
}


export default Skills;
