import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiUbuntu,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiTensorflow,  } from "react-icons/si";
import {GiArchiveResearch

} from "react-icons/gi";
import {BiAnalyse,BiMessageRoundedDetail,BiTimeFive} from "react-icons/bi"
import {FaAssistiveListeningSystems} from "react-icons/fa"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <GiArchiveResearch />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <FaAssistiveListeningSystems />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BiAnalyse />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BiMessageRoundedDetail />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BiTimeFive />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiUbuntu />
        </Col>

    </Row>
  );
}

export default Techstack;
