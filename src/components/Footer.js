import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div className="media">

          
          <a href="https://github.com/rithvik23-root" rel="noreferrer" target="_blank"><img src="/github.png" className="git_img" alt="git"/></a>
          <a href="https://www.instagram.com/_rithvik23_/" rel="noreferrer" target="_blank"><img src="/instagram.png" className="git_img" alt="git"/></a>
          <a href="https://www.linkedin.com/in/rithvikarelli" rel="noreferrer" target="_blank"><img src="/linkedin.png" className="git_img" alt="git"/></a>

        
      </div>
      <p className="namef">rithvik ©2025</p>
    </div>
  );
}
