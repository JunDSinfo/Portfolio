import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/DungCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {


  useEffect(() => {

  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative"}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Natural language generator at Korbit"
              date="July/2018-now"
              content={[
                "Research the application of generating the Natural language for the Intelligence Tutor System",
                "Generate natural language contents (Hints, questions, answers)",
                  "Create the API with Microservices for ML applications",
                  "Work with platforms: Rasa, Elmo, Torch, Tensor-flow, Spacy",
                  "Pre-process data: imbalance, unicode, symbol, math, etc.,",
                  "Process data with CUDA, Multiple processors",
                  "Work with AWS, Colab, Google cloud , notebook jupyter"
              ]}
            />
              <Resumecontent
                  title="PhD Candidate on Artificial Intelligence at Lincs lab"
                  date="March/2018-now"
                  content={[
                      "Research the application for learning disability using Tensorflow, Opencv, Pycharm, DeepLearn.js, OpenAI, ConvNetJS, APIs",
                      "Natural Language Processing in a smart Dialog system",
                      "PhD thesis: Natural Language Generation for ITS\n"

                  ]}
              />
              <Resumecontent
                  title="Scientific Specialist at Bibliomondo"
                  date="Octorber/2017-Febuarary/2018"
                  content={[
                      "Research the application by using Python, and Android Studio, Webstorm, IntelliJ IDEA (e.g., Research the Object recognition and Hologram module)    ",
                      "Create the language locale and UI module by using Reactjs, Momentjs, Redux-sagas at Timesheet project",
                      "Content-based image retrieval (CBIR) algorithm: show the information of detected object when user takes its' photo",
                      "Convert the text information of the detected object to the pure voice with English and French"

                  ]}
              />
              <Resumecontent
                  title="Team Leader at Civil Infrastruture Platform project in Renesas"
                  date="Octorber/2016-June/2017"
                  content={[
                      "Apply OS patches and upgrades on a regular basis. Configure/add new services as necessary and maintain a big system based on big data analysis. ",
                      "Upgrade and configure system software that supports infrastructure applications or Asset Management applications per project or operational needs (Yocto, bash shell))",
                      "Perform ongoing performance tuning, hardware upgrades, and resource optimization as required",


                  ]}
              />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Ph.D.  candidate in Ecole de technologie superieure "
              date="2018 - Now"
              // content={[`GPA: ${cgpa}`]}
              content={["GPA: 3.15/4","Thesis: Natural Language Generation for Intelligent Tutoring System"]}
            />
            <Resumecontent
              title="Ph.D. student (Course) in Dankook University"
              date="2015 - 2016"
              content={["Precentage: 70%","GPA:4.35/4.5","Research: Big data in the social network"]}
            />
            <Resumecontent
              title="M.Sc. Hanoi University Of Science and Technology  "
              date="20012 - 2014"
              content={["Precentage: 100%", "GPA: 3.15/4", "Thesis: Application in Intelligent Transportation System"]}
            />
              <Resumecontent
                  title="M.Sc. Hanoi University Of Science and Technology  "
                  date="20012 - 2014"
                  content={["Precentage: 100%", "GPA:8.12/10" ]}
              />
            <h3 className="resume-title">Scholarship and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                'Mathematics of Information Technology and Complex Systems (Mitacs) : Fund for Basic Science',
                'Research Program in collaboration with industrial partner.',
                `National Research Foundation of Korea (NRF) and Ministry of of Science, ICT & Future Planning (MSIP) : Fund for Basic Science Research Program`,
                "Brain Korea 21+ Program.",
                "Samsung Electronic Vietnam Scholarship for the Excellent 5th Year-Student of Hanoi University of Science and Technology",
                  "5 years scholarship for the great students at Hanoi University of Science and Technology "
              ]}
            />
              <h3 className="resume-title">Social Activities and Contributions</h3>

              <Resumecontent
                  title="Social Activities"
                  content={[
                      "Volunteer of  PM\\'EI - GRAND RDV des étudiants internationaux, 2017",
                      "Co-founder Vietnamese Technology (Viettech) Community in Montreal, Canada, 2019",
                      "Data science Mentor of MacHacks, 2021 "
                  ]}
              />
              <Resumecontent
                  title="Social Contributions"
                  content={[
                      "Prize for people who has many contributions in the E-learning: Topica and ThanhGiong of Knowledge.",
                      "Work with Korbit Inc  which was one of top watching out EdTech startup in Canada 2020 with 5 persons and found by 2017",

                  ]}
              />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
