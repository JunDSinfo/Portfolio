import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
    const { t } = useTranslation('common');

    return (
    <Typewriter
      options={{
        strings: [
          "R&D of Machine learning applications",
          "Natural Language Generation",
          "Data Analysis",
          "Researcher of Deep learning",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
