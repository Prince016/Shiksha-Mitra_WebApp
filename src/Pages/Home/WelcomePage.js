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
        <div className="content">
          <p>
            Available to all Seattle campus undergraduates, the Center for
            Learning and Undergraduate Enrichment (CLUE) is the largest free
            tutoring program at the UW. We provide tutoring for Math, Chemistry,
            Physics, Writing, Biology, Statistics, and Computer Science & modi,
            nesciunt nisi aspernatur culp Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolorum adipisci modi repellat nisi
            illo aliquam ad accusantium, sit consequatur ea animi harum
            explicabo facere optio id inventore et accusamus non? odi nihil
            mollitia! Atque amet quas ea eum nostrum rerum quae necessitatibus
            officia. Eligendi eos laudantium, dolor ipsam ipsa blanditiis neque
            recusandae repellendus tenetur perspiciatis explicabo quisquam,
            cumque qui. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus officia quaerat quis id quisquam ad qui omnis
            temporibus quas officiis laboriosam reprehenderit ipsum voluptates
            iste, soluta labore nam unde tempora?
          </p>
        </div>
      </div>
      {/* </div> */}
      <div id="About">
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
      </div>
    </>
  );
};

export default WelcomePage;
