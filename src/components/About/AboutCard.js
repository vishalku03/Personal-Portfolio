import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vishal Kumar</span>{" "}
            from <span className="purple">Bihar, India</span>.
            
              I am a B.Tech (CSE) graduate (2025) and a highly motivated fresher with strong proficiency in MERN Stack and Full-Stack Development.
              I specialize in Frontend Engineering with hands-on experience in React.js, Node.js, JavaScript, MongoDB, and SQL, 
              and I am passionate about building scalable, user-centric web applications.
              I possess a strong foundation in Data Structures and Algorithms, having solved 1300+ coding problems across platforms 
              like LeetCode and GeeksforGeeks, demonstrating my analytical thinking and problem-solving capabilities.

          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vishal Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
