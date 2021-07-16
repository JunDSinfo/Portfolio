import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Do Dung Vu </span>
            from <span className="purple"> Montreal, Canada.</span>
            <br />I am a PhD Candidate at École de technologie supérieure ÉTS.
            <br />
            <br />
            Apart from research and development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports: Hiking, Swimming, Table Tennis, and Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books, Doing the social activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Taking care of my little family
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Today is hard, Tomorrow will be worse, but the day after tomorrow will be sunshine"{" "}
          </p>
          <footer className="blockquote-footer">Do Dung Vu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
