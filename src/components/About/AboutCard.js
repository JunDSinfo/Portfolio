import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';



function AboutCard() {
  const { t } = useTranslation('common');
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('Hi Everyone, I am')} <span className="purple">Do Dung Vu </span>
            {t('from')} <span className="purple"> Montreal, Canada.</span>
            <br />{t('I am a PhD Candidate at École de technologie supérieure ÉTS.')}
            <br />
            <br/>
            <br />
            {t('Apart from research and development, some other activities that I love to do!')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("Playing Sports like Soccer, Hiking, Swimming, Table Tennis, and Gym")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('Reading Books, Doing the social activities')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('Traveling and Taking care of my little family')}
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            {t('Today is hard, Tomorrow will be worse, but the day after tomorrow will be sunshine')}
          </p>
          <footer className="blockquote-footer">Do Dung Vu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
