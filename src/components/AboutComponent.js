import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/about.css";
import SkillsCard from "./SkillsCard";

export default function AboutComponent() {
  const [skillsSet, setSkillsSet] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkillsSet(data));
  });

  const columns = [
    skillsSet.slice(0, 3),
    skillsSet.slice(3, 7),
    skillsSet.slice(7, 10),
  ];
  return (
    <section>
      <div className="about_content">
        <div className="about_profile">
          <div className="about_pic">
            <img src="/sf.jpg" alt="dp" className="profile-pic"></img>
          </div>
          <div className="about_intro">
            <p className="profile_para">
              I'm a software developer with a knack for Java, JavaScript, React,
              and building cool web experiences. I love the mix of creativity
              and problem-solving that comes with coding and thrive on learning
              something new every day. When I'm not deep in code, you’ll find me
              gaming, hitting the gym, or playing cricket.
            </p>
          </div>
        </div>
        <div className="about_skills">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="skills_col">
              {col.map((skill, skillIndex) => (
                <SkillsCard
                  key={skillIndex}
                  skill={skill}
                  delay={skillIndex * 500}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
