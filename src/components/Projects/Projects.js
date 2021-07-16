import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PaperCards from "./PaperCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Because of the non-disclosure terms, only the description and role of product projects are shown.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Natural Language Generation Research at Korbit"
              description="Personal Hint Generations project is the part of Korbit
               which was built with machine learning and state-of-the-art natural language
               processing technique. The results allows Korbi - an AI Tutor to generate hint
               based on the open source content with high student learning gain (43%)."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard

              isBlog={false}
              title="Research Shazam Image project and Develop the User Interface of the Timesheet project at Biliomondo"
              description="Research the application by using Python, and Android Studio, Webstorm, IntelliJ IDEA
              (e.g., Research the Object recognition and Hologram module) by using CNN and Tensorflow.
               Create the language locale and UI module by using Reactjs, Momentjs, Redux-sagas at Timesheet projecty"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard

                isBlog={false}
                title="Civil Infrastruture Platform project at Renesas"
                description="Apply OS patches and upgrades on a regular basis.
                Configure/add new services as necessary and maintain a big system based
                on big data analysis. Upgrade and configure system software that supports
                infrastructure applications or Asset Management applications per project or
                operational needs (Yocto, bash shell)). Perform ongoing performance tuning, hardware upgrades, and resource optimization as required
                "
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard

                isBlog={false}
                title="Research Machine learning model, making the insightful and supervised application at Dankook University"
                description="Develop the social media analysis applications (e.g., GeoSocialBoundary, Detetecting human, spammer, and bot on the social network, sentiment analysis) by using R program.
			Develop IoT applications (e.g., Demo of smart home, smart car; Object tracing and detecting; lane detection applications"
            />
          </Col>


        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="paper-card">

            <PaperCards

                description="Cong Tran, D. D. Vu* , and  Won-Yong Shin, An Improved Approach for Estimating Social POI Boundaries With Textual Attributes on Social Media, in  Knowledge-Based Systems  2020"
                link  = "https://www.sciencedirect.com/science/article/pii/S095070512030839X?utm_campaign=STMJ_AUTH_SERV_PUBLISHED&utm_medium=email&utm_acid=149362166&SIS_ID=&dgcid=STMJ_AUTH_SERV_PUBLISHED&CMX_ID=&utm_in=DM110556&utm_source=AC_"
            />
          </Col>
          <Col md={12} className="paper-card">

            <PaperCards

                description="Ekaterina Kochmar, D. D. Vu*,
Robert Belfer, Varun Gupta, Iulian Vlad Serban, Joelle Pineau, Automated Personalized Feedback ImprovesLearning Gains in an Intelligent Tutoring System, in Artificial Intelligence Education 2020  "
                link  = "https://link.springer.com/chapter/10.1007/978-3-030-52240-7_26"
            />
          </Col>
          <Col md={12} className="paper-card">

            <PaperCards

                description="Iulian Vlad Serban,
Varun Gupta, Ekaterina Kochmar, D. D. Vu*, Robert Belfer,Joelle Pineau,Aaron Courville,Laurent Charlin,Yoshua Bengio, Korbit: A Large-Scale, Open-Domain,Mixed-Interface Dialogue-Based ITS for STEM, in  Artificial Intelligence Education 2020  "
                link  = "https://link.springer.com/chapter/10.1007/978-3-030-52240-7_70 "
            />
          </Col>
          <Col md={12} className="paper-card">

            <PaperCards

                description="Cong Tran, D. D. Vu* , and  Won-Yong Shin, An Improved Approach for Estimating Social POI Boundaries With Textual Attributes on Social Media, in  Knowledge-Based Systems  "
                link  = "https://www.sciencedirect.com/science/article/pii/S095070512030839X?utm_campaign=STMJ_AUTH_SERV_PUBLISHED&utm_medium=email&utm_acid=149362166&SIS_ID=&dgcid=STMJ_AUTH_SERV_PUBLISHED&CMX_ID=&utm_in=DM110556&utm_source=AC_"
            />
          </Col>
          <Col md={12} className="paper-card">

            <PaperCards

                description="D. D. Vu* and G. Kaddoum, A Smart Waste City Management System for Smart Cities Applications, in Advances in Wireless and Optical Coomunications, Riga, Lativa, Nov. 2017  "
                link  = "https://ieeexplore.ieee.org/document/8228538/"
            />
          </Col>
          <Col md={12} className="paper-card">

            <PaperCards

                description="W.-Y. Shin and D. D. Vu*, Density-based estimation of POI boundaries using geo-tagged tweets, Journal of KICS, vol. 42, no. 2, pp. 453-459, February 2017  "
                link  = "http://koreascience.or.kr/article/ArticleFullRecord.jsp?cn=GCSHCI_2017_v42n2_453"
            />
          </Col>
          <Col md={12} className="paper-card">

            <PaperCards

                description="D. D. Vu*, H. To, W.-Y. Shin, and C. Shahabi, GeoSocialBound: An efficient framework for estimating social POI boundaries using spatio-textual information, in Proceedings of the International ACM SIGMOD Workshop on Managing and Mining Enriched Geo-Spatio Data (GeoRich), San Francisco, CA, June 2016  "
                link  = "https://dl.acm.org/citation.cfm?id=2948652"
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
