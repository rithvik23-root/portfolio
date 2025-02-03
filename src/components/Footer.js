import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div className="media">
        <a
          href="https://github.com/rithvik23-root"
          alt="git"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/git.jpg" className="git_img" alt="git"></img>
        </a>
      </div>
      <p className="namef">rithvik</p>
    </div>
  );
}
