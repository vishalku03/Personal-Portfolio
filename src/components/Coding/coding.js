
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

import leetLogo from "../../Assets/leetcode.png";
import gfgLogo from "../../Assets/gfg.png";
import ninjaLogo from "../../Assets/codingninjas.png";
import hackLogo from "../../Assets/hackerrank.png";

function Coding() {
  const profiles = [
    {
      imgPath: leetLogo,
      title: "LeetCode",
      description:
        "I  Solved 800+ problems, including coding challenges, on LeetCode, showcasing strong algorithmic skills and programming expertise, and gained hands-on experience in data structures and problem-solving.",
      link: "https://leetcode.com/u/vishal_k01/",
    },
    {
      imgPath: gfgLogo,
      title: "GeeksforGeeks",
      description:
        " I Solved 400+ problems, including coding challenges, on GeeksforGeeks, demonstrating strong problem-solving skills and programming expertise, and gained hands-on experience in algorithms and data structures.",
      link: "https://www.geeksforgeeks.org/user/vishalk7ssc/",
    },
    {
      imgPath: ninjaLogo,
      title: "Coding Ninjas",
      description:
        "1000+ problems, including MCQs and coding challenges, on Coding-Ninjas, strengthening problem-solving skills and programming expertise, and gained hands-on experience in algorithms and data structures.",
      link: "https://www.naukri.com/code360/profile/169f787a-3dfd-4a92-9524-9920e6329e00",
    },
    {
      imgPath: hackLogo,
      title: "HackerRank",
      description:
        "Earned 5-Star rating on HackerRank, consistently showcasing strong problem-solving skills, programming expertise, and hands-on experience in algorithms and data structures.",
      link: "https://www.hackerrank.com/profile/vishalk000123",
    },
  ];

  // Split into rows of 2
  const rows = [];
  for (let i = 0; i < profiles.length; i += 2) {
    rows.push(profiles.slice(i, i + 2));
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Coding Profiles</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are platforms where I regularly practice DSA & Problem Solving.
        </p>

        {rows.map((row, idx) => (
          <Row
            key={idx}
            style={{ justifyContent: "center", paddingBottom: "20px" }}
          >
            {row.map((profile, idy) => (
              <Col md={6} key={idy}>
                <Card className="mb-4" style={{ backgroundColor: "#1c1c1c", color: "white", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src={profile.imgPath}
                    style={{ width: "120px", height: "120px", objectFit: "contain", margin: "20px auto 0 auto" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{profile.title}</Card.Title>
                    <Card.Text>{profile.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Coding;
