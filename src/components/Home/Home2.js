import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Vu.png";
import sylvie from "../../Assets/sylvie.jpg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from 'react-i18next';


import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



function Home2() {
  const { t } = useTranslation('common');
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("LET ME")} <span className="purple"> {t("INTRODUCE")} </span>{t("MYSELF")}
            </h1>
            <p className="home-about-body">
              {t("I fell in love with machine and deep learning technologies,")}
              <br />
              <br />{t("I am fluent in")}
              <i>
                <b className="purple"> {t("Python, Pytorch, Elmo, Spacy, and R.")} </b>
              </i>
              <br />
              <br />
              {t("I am a commitment man. My field of Interests are building new")};
              <i>
                <b className="purple">{t("Machine Learning Technologies and Products")} </b> {t("and also in areas related to")}
                <b className="purple">
                  {t("Deep Learning and Natural Language Processing.")}
                </b>
              </i>
              <br />
              <br />
              {t("Whenever possible I also  read books and improve myself.")}
              {t("I like")}  <b className="purple">{t("Sport")}</b> {t("and")}
              <i>
                <b className="purple">
                  {" "}
                  {t("Social activities")}
                </b>
              </i>
              {t("which")}
              <i>
                <b className="purple"> {t("help me have the great energy and a balance life")}</b>

              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("FIND ME ON")}</h1>
            <p>
              {t("Feel free to")} <span className="purple">{t("connect")} </span>{t("with me")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JunDSinfo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vudodung85"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dung-do-vu-75253679/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dungvu85/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
