import React from "react";
import "./home.css";

const WelcomePage = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="welcome-container">
        <div className="heading">
          <h1>Welcome to Shiskha Mitra</h1>
        </div>
        <div className="content" >
          <p>
          Shiksha Mitra is a tutor-tutee match-making platform aimed at bridging the gap 
            between advanced and slow learners. The platform is an inclusive space for students to 
            connect with peers not just for support on the subjects of a particular semester but also to 
            broaden their horizons by learning new subjects from different schools and specializations. 
            The platform encourages advanced learners(teaching enthusiasts) to mentor their peers to get a 
            good grip on the subject. The dual benefits of mentorship will be shared by both mentors and 
            mentees where mentees will excel academically while the mentor will be provided with 
            credits/badges/certificates/monetary benefits that can be showcased during interviews 
            depicting their academic excellence and quality of nurturance.
          </p>
        </div>
      </div>
      {/* </div> */}
      {/* <div id="About">
        <div className="about-container">
          <div className="left-about">
            <h3>
              You can watch this video to get a sense of what CLUE is like in
              person.
            </h3>
          </div>

          <div className="right-about">
            <div className="about-video">
              <iframe
                className="video"
                width="720"
                height="415"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default WelcomePage;
