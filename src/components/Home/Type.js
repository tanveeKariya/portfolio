import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UI/UX Designer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Programmer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
