import React from "react";

import Avatar from "./Avatar";
import Button from "./Button";
import Simple from "./elements/Simple";

const Hero: React.FC = () => {
  return (
    <Simple>
      <div className="flex flex-col items-center justify-center">
        <Avatar />
        <h1 className="font-bold text-3xl mt-6">Juan Almanza</h1>
        <p className="text-lg">Software Engineer</p>
        <a href="https://cv.scidroid.co" className="text-lg">
          <Button>Read my resume</Button>
        </a>
      </div>
    </Simple>
  );
};

export default Hero;
