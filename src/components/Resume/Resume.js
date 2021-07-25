import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/DungCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

function Resume() {
    const { t } = useTranslation('common');
    useEffect(() => {

  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative"}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;{t("Download CV")}
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">{t("Experience")}</h3>
            <Resumecontent
              title={t("Natural language generator at Korbit")}
              date={t("July/2018-now")}
              content={t("Korbit JD")}
            />
              <Resumecontent
                  title={t("PhD Candidate on Artificial Intelligence at Lincs lab")}
                  date={t("March/2018-now")}
                  content={t("Lincs JD")}


              />
              <Resumecontent
                  title={t("Scientific Specialist at Bibliomondo")}
                  date={t("October/2017-February/2018")}
                  content={t("Bibliomondo JD")}
              />
              <Resumecontent
                  title={t("Team Leader at Civil Infrastructure Platform project in Renesas")}
                  date={t("October/2016-June/2017")}
                  content={t("Apply OS patches and upgrades on a regular basis. Configure/add new services as necessary and maintain a big system based on big data analysis. Upgrade and configure system software that supports infrastructure applications or Asset Management applications per project or operational needs (Yocto, bash shell)). Perform ongoing performance tuning, hardware upgrades, and resource optimization as required")}
              />
              <Resumecontent
                  title={t("R&D Machine learning model, making the insightful and supervised application at Dankook University")}
                  date={t("March/2015-August/2016")}
                  content={t("Develop the social media analysis applications (e.g., GeoSocialBoundary, Detecting human, spammer, and bot on the social network, sentiment analysis) by using R program. Develop IoT applications (e.g., Demo of smart home, smart car; Object tracing and detecting; lane detection applications")}
              />
              <Resumecontent
                  title={t("Lecturer of Information System at Hanoi University of Mining and Geology")}
                  date={t("January/2010 - March/2015")}
                  content={t("Interpret data, analyze results using statistical techniques and provide ongoing reports. Develop and implement data collection systems and other strategies that optimize statistical efficiency and data quality. Acquire data from primary or secondary data sources and maintain databases/data systems. Identify, analyze, and interpret trends or patterns in complex data sets. Filter and “clean” data, and review computer reports, printouts, and performance indicators to locate and correct code problems. Work closely with management to prioritize business and information needs. Locate and define new process improvement opportunities")}
              />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">{t("Education")}</h3>
            <Resumecontent
              title={t("Ph.D.  candidate in Ecole de technologie superieure ")}
              date={t("2018 - Now")}
              content={t("GPA: 3.15/4. Thesis: Natural Language Generation for Intelligent Tutoring System")}
            />
            <Resumecontent
              title={t("Ph.D. student (Course) in Dankook University")}
              date={t("2015 - 2016")}
              content={t("Percentage: 70%. GPA:4.35/4.5. Research: Big data in the social network")}
            />
            <Resumecontent
              title={t("M.Sc. Hanoi University Of Science and Technology  ")}
              date={t("2012 - 2014")}
              content={t("Percentage: 100%. GPA: 3.15/4. Thesis: Application in Intelligent Transportation System")}
            />
              <Resumecontent
                  title={t("Bachelor Hanoi University Of Science and Technology  ")}
                  date={t("2004 - 2009")}
                  content={t("Percentage: 100%. GPA:8.12/10" )}
              />
            <h3 className="resume-title">{t("Scholarship and Achievements")}</h3>
            <Resumecontent
              title=""
              content={t("Mathematics of Information Technology and Complex Systems (Mitacs) : Fund for Basic Science Research Program in collaboration with industrial partner.Nominated for Mitacs award 2020. National Research Foundation of Korea (NRF) and Ministry of of Science, ICT & Future Planning (MSIP) : Fund for Basic Science Research Program. Brain Korea 21+ Program. Samsung Electronic Vietnam Scholarship for the Excellent 5th Year-Student of Hanoi University of Science and Technology .5 years scholarship for the great students at Hanoi University of Science and Technology ")}

            />
              <h3 className="resume-title">{t("Social Activities and Contributions")}</h3>

              <Resumecontent
                  title={t("Social Activities")}
                  content={t("Volunteer of  PM'EI - GRAND RDV des étudiants internationaux, 2017. Co-founder Vietnamese Technology (Viettech) Community in Montreal, Canada, 2019.  Data science Mentor of MacHacks, 2021 ")}

              />
              <Resumecontent
                  title={t("Social Contributions")}
                  content={t("Prize for people who has many contributions in the E-learning: Topica and ThanhGiong of Knowledge. Work with Korbit Inc  which was one of top watching out EdTech startup in Canada 2020 with 5 persons and found by 2017")}


              />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;{t("Download CV")}
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
