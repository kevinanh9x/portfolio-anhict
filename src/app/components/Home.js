import React from "react";
import "./Home.scss";
import Logo from "./Image/IMG_5883.png";
import AICT from "./Image/DSC_0239.png";

const Home = () => {
  return (
    <div className="landing">
      <div className="landing-page">
        <img src={Logo} alt="logo" className="img-1" />
        <p className="text-2">Hi! I’m AnhICT</p>
        <p className="text-3">Wecome to my sites</p>
        <p className="text-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros orci,
          nulla id arcu laoreet mattis purus amet arcu. Ultrices id in
          pellentesque platea.
        </p>
        <p className="text-5">About me</p>
        <p className="text-6">Skills</p>
        <p className="text-7">Project</p>
        <p className="text-8">Contact</p>
        <img src={AICT} alt="AnhICT" className="img-9" />
        {/* <img src="" /> */}
        <div className="btn-_hire">
          <p className="text-1-0">Hire me !</p>
        </div>
        <div className="btn-_hire">
          <p className="text-1-1">See My Project</p>
        </div>
        <div className="rectangle-6" />
        <div className="rectangle-7" />
      </div>
    </div>
  );
};

export default Home;
