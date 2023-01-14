import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Voice Cloning"
              description="This is a Text-to-Speech project. This tool will clone users voice using few seconds of voice recording as sample from user. Just like VALL-E."
              ghLink="https://github.com/BilalSardar009/Voice-Cloning"
              demoLink="https://huggingface.co/spaces/BilalSardar/Voice-Cloning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Question and Answering tool"
              description="This tool will use question and answer artificial intelligence model to generate answers from given context. "
              ghLink="https://github.com/BilalSardar009/Question-And-Answer-Gardio-app"
              demoLink="https://huggingface.co/spaces/BilalSardar/QuestionAndAnswer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VidQuest"
              description="This tool will generate MCQS from a youtube video link."
              ghLink="https://github.com/BilalSardar009/VidQuest"
              demoLink="https://huggingface.co/spaces/BilalSardar/YoutubeVideoLink-To-MCQs-Generation"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog Writer Using OpenAI"
              description="This website Generate Blogs based on prompt. It suggests titles, headings and content as well. "
              ghLink="https://github.com/BilalSardar009/Blog-writer-OpenAI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Auto ML Model Training"
              description="This tool will allow user to train a machine learning model on custom dataset."
              ghLink="https://huggingface.co/spaces/BilalSardar/AutoML-Model-Training/tree/main"
              demoLink="https://huggingface.co/spaces/BilalSardar/AutoML-Model-Training"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Object and Color Detection in video"
              description="This tool uses open-cv and colorthief pre trained models to detect objects and colors in a video."
              ghLink="https://github.com/BilalSardar009/Object-and-Color-detection-in-video"
              demoLink="https://huggingface.co/spaces/BilalSardar/Object-Color-Detection-in-Video" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
