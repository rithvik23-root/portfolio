import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";

export default function Projectcard({data,right}) {   
  
  
  return (
    <>
    
    <div className={`container-fluid ${right ? 'project-right' : 'project-left'}`}>
      <div className="project-image-container">
        <img className="project-image" src={data.img} alt="alt" />
      </div>
      <div className="project-info">
        <h2>{data.name}</h2>
        <p>
          {data.info}
        </p>
        <a href={data.link} target="_blank" rel="noopener noreferrer"><button className="learn-bt">Learn More!</button></a>
      </div>
    </div>

  </>
  );
}
