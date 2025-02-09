import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/about.css";

export default function SkillsCard({ skill, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay+500);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`skills_item ${visible ? `visible` : ``}`}>
      <img src={skill.img} alt={skill.alt} />
      <div>
        <p className="skill_name">{skill.name}</p>
      </div>
    </div>
  );
}
