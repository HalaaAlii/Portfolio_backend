import meter1 from "../assets/img/icons8-c++.svg";
import meter2 from "../assets/img/icons8-js.svg";
import leader from "../assets/img/woman-giving-an-election-speech-svgrepo-com.svg";
import Team from "../assets/img/icons8-group-task-48.png";
import Solver from "../assets/img/icons8-female-worker-48.png";
import Html from "../assets/img/html-5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>The skills I have gained from extracurriculurs and work experience <br></br> I'm looking to apply my invaluable soft and hard skills in Fall 2024 internship</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={leader} alt="Image" />
                                <h5>Leader</h5>
                                </div>
                            <div className="item">
                                <img src={Team} alt="Image" />
                                <h5>Team Player</h5>
                                </div>
                            <div className="item">
                                <img src={Solver} alt="Image" />
                                <h5>Problem Solver</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}