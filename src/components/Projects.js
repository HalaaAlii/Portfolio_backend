import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/goose.jpg";
import projImg2 from "../assets/img/shetribe.png";
import projImg3 from "../assets/img/lendit.png";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blockchain Chatbot",
      description: "Development",
      imgUrl: projImg1,
      url: "https://sillygoose.vercel.app"

    },
    {
      title: "Social Media Platform",
      description: "Development",
      imgUrl: projImg2,
      url: "https://devpost.com/software/shetribe"
    },
    {
      title: "E-commerce Website",
      description: "Design & Development",
      imgUrl: projImg3,
       url: "https://halaaalii.github.io/LendIt/"
    }
  ];

  return (
       <Container className="proj-bx wow zoomIn">
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
Taking on personal projects has been my most effective learning method. I thrive on hands-on experiences. Through building these projects, I've discovered that the most valuable lessons are learned in the process of creation itself. Each project is not just a product but also a journey of my continuous learning and growth!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
       </Container>
  )
}