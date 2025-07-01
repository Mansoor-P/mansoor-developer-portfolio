import React from "react";
import mansoorPic from "../../assets/mansoor-pic.jpg";

const AboutHeader = () => (
  <div className="text-center mt-5 mb-12">
    <img
      src={mansoorPic}
      alt="Mansoor Profile"
      width={300}
      height={300}
      className="rounded-full mx-auto mb-6 object-cover"
    />
    {/* 
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  I’m a full-stack developer who enjoys solving complex backend challenges and building scalable, user-centric applications. As a GSoC 2025 Contributor, I collaborate on impactful open-source projects.
</p> */}
  </div>
);

export default AboutHeader;
