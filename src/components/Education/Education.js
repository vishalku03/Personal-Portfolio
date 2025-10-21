

import React from "react";
import "./Education.css"; 
import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      type: "Education",
      level: "10th Grade",
      school: "M S Memorial Public School",
      year: "2016 - 2018",
      percentage: "80.4%",
      icon: <FaSchool />,
      color: "#6c63ff",
    },
    {
      type: "Education",
      level: "12th Grade",
      school: "State Board of Secondary Education",
      year: "2018 - 2020",
      percentage: "81%",
      icon: <FaSchool />,
      color: "#6c63ff",
    },
    {
      type: "Education",
      level: "Graduation",
      school: "RGPV University, Computer Science",
      year: "2021 - 2025",
      percentage: "77.6%",
      icon: <FaGraduationCap />,
      color: "#ff6584",
    },
    {
      type: "Certification",
      level: "Data Structures & Algorithms",
      school: "CodeHelp",
      year: "2023",
      icon: <FaCertificate />,
      color: "#28a745",
    },
    {
      type: "Certification",
      level: "Full Stack Web Development",
      school: "Apna-College",
      year: "2024",
      icon: <FaCertificate />,
      color: "#28a745",
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Education & Certifications</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon" style={{ backgroundColor: edu.color }}>
              {edu.icon}
            </div>
            <div className="timeline-content">
              <h3>{edu.level}</h3>
              <p className="school">{edu.school}</p>
              <p>
                {edu.year} {edu.percentage && ` | ${edu.percentage}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

