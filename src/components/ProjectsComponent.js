import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Projectcard from "./ProjectCard";

export default function ProjectsComponent() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  
  return (
    <div>
      <h1 className="heading">Projects</h1>
      
    {
      projectData.map((data,index)=>(

        <Projectcard right={index%2===0?true:false} data={data}></Projectcard>
    ))
    }
    </div>
  );
}
