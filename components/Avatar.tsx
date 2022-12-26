import Image from "next/image";

import avatarGif from "public/avatar.gif";
import avatarImage from "public/avatar.png";
import React, { useEffect, useState } from "react";

const Avatar: React.FC = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);

    setTimeout(() => {
      setHover(false);
    }, 2500);
  };

  useEffect(() => {
    if ("ontouchstart" in window) {
      document.addEventListener("click", handleMouseEnter);
    } else {
      document.addEventListener("mouseenter", handleMouseEnter);
    }
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter}>
      <Image
        priority
        src={hover ? avatarGif : avatarImage}
        alt="Juan's avatar"
        className="rounded-full w-40 h-40"
      />
    </div>
  );
};

export default Avatar;
