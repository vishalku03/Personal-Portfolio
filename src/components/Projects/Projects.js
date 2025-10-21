import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cash from "../../Assets/Projects/cash-flow-minmiser.png";
import school from "../../Assets/Projects/school-grade-guard.png";
import expense from "../../Assets/Projects/expense-tracker.png";
import tic from "../../Assets/Projects/tic-tac-toe.png";
import music from "../../Assets/Projects/music-player.png";
import password from "../../Assets/Projects/password-generator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School-Grade-Guard"
              description="School Grade Guard is a smart system that helps schools manage their daily work easily. It helps organize classes, students, and teachers all in one place."
              ghLink="https://github.com/vishalku03/School-Grade-Guard"
              demoLink="https://school-grade.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense-Tracker"
              description="The Expense Tracker is a MERN stack web app that lets users record, edit, and delete transactions, view monthly expense summaries, and get reports via email. It uses MongoDB Atlas for cloud storage, with the backend on Render and the frontend on Vercel."
              ghLink="https://github.com/vishalku03/Expense-Tracker"
              demoLink="https://expense-tracker-web-opal.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cash}
              isBlog={false}
              title="Cash-Flow-Minmiser"
              description="This allows users to split expenses with friends or colleagues. If a group needs to share the cost of a particular bill, this will make sure that each person who paid money."
              ghLink="https://github.com/vishalku03/Cash-Flow-Minmiser"
              demoLink="https://cash-flow-minmiser.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic-tac-toe is a game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row. ...a game of tic-tac-toe."
              ghLink="https://github.com/vishalku03/Tic-Tac-Toe-using-ReactJS"
              demoLink="https://github.com/vishalku03/Tic-Tac-Toe-using-ReactJS"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music-Player"
              description="This is the project made for Data Structures and Algorithm Course. Here we implement a C++ based Basic Music Player using the knowledge of various Data structures used include a doubly linked list, stacks and queues."
              ghLink="https://github.com/vishalku03/Music-Player_using_Data-Structures"
              demoLink="https://github.com/vishalku03/Music-Player_using_Data-Structures"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password-Generator"
              description="This project generates strong, random passwords based on user-selected parameters such as length, uppercase/lowercase letters, numbers, and special characters. It ensures that passwords are both secure and unique, making them resistant to cracking."
              ghLink="https://github.com/vishalku03/password-generator"
              demoLink="https://password-generator-one-ruby.vercel.app/"       
            />
          </Col>
  
         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;



