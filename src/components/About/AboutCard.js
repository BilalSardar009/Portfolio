import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bilal Sardar</span> from{" "}
            <span className="purple">Cambridge, United Kingdom.</span>
            <br />
            I am currently pursuing my Master's degree in Artificial Intelligence at Anglia Ruskin University, Cambridge.
            <br />
            <br />
            I'm an innovative Machine Learning Engineer with strong AI and deep learning expertise.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing AI models for computer vision and NLP applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on deep learning projects using TensorFlow and PyTorch
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring cutting-edge AI technologies and research
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovating at the intersection of AI and real-world applications"
          </p>
          <footer className="blockquote-footer">Bilal Sardar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
  );
}

export default AboutCard;
