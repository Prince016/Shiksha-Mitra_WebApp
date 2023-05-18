import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ServiceSection from "./ServiceSection";
import "./homeV2.css";
import QuadSection from "./QuadSection";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const homeV2 = () => {
  const carouselData = [
    {
      title: "Mission & Vision",
      data: "Our peer-mentoring online platform is founded on a mission to empower individuals to achieve their full potential by providing access to valuable mentorship and guidance. We believe that everyone can benefit from the wisdom and insights of mentors, and we are committed to creating a supportive community where individuals can connect and grow. ",
      subdata: "",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/016/063/048/small/mission-vision-values-concept-vector.jpg",
    },
    {
      title: "Peer Tutoring Made Easy",
      data: "Unlock your potential with the guidance of your peers ",
      subdata: "",
      imgUrl:
        "https://www.vedamo.com/wp-content/uploads/cache/2019/01/Benefits-Of-Peer-Tutoring-In-The-Virtual-Classroom/2581583151.png",
    },
    {
      title: "Shiksha Mitra",
      data: "Our peer mentoring online platform is designed to connect individuals seeking guidance with experienced mentors in their field. Providing an inclusive space for personalized support through virtual communication, we aim to foster meaningful connections and facilitate personal and professional growth",
      subdata: "",
      imgUrl:
        "https://blog.joinknack.com/hubfs/Imported_Blog_Media/students-peer-tutor-700x330.jpg",
    },
  ];
  const OurGuidlines = [
    {
      imgUrl:
        "https://cdn.images.express.co.uk/img/dynamic/59/590x/Zoom-Google-Meet-battery-saving-feature-Microsoft-Teams-1423216.jpg?r=1618426622417",
      title: "How does virtual tutoring work?",
      content:
        "Shiksha Mitra enables online tutoring by allowing mentors to schedule a meeting and providing online class links to any of the platforms (Zoom, Google Meet, Microsoft Teams) as preferred by the mentor and mentee. You must be logged in with your NCU ID and password to access Shiksha Mitra.<p> 1. A month before the exams the platform will be accessible to mentees,and they would be able to raise a maximum of 3 subject requests </p>. <p>2. On getting all the requests of the mentees, the platform will be open to mentees wherein they would be presented with all the subject requests raised by mentees.</p> <p>3. The mentors will select the subject request for which they want to mentor the mentee hence mapping a mentor to a mentee.</p> <p>4. A meeting would be scheduled by the mentor for the selected subject request which would be shown on both the mentor and mentee page.</p> <p>5. The mentee will be able to connect with the mentor using the class meeting link provided by the mentor.</p> <p>6. Please make sure that the name you use in the meeting is your full official name. This will help us in cross-checking the meeting for quality assurance and authentication.</p> <p>7. For further queries and concerns mail us at: shikshaMitra@gmail.com</p> ",
      subcontent:
        "Shiksha Mitra enables online tutoring by allowing mentors to schedule a meeting and providing...",
    },
    {
      imgUrl:
        "https://d7c2r9g9.rocketcdn.me/wp-content/uploads/How-to-Present-PowerPoint-on-Zoom-Teams-Skype-Webex-and-Google-Meet.jpg",
      title: "What technology do I need and how can I get help?",
      subcontent:"A personal computer or tablet with interne...",
      content:
        "A personal computer or tablet with internet access and sound is necessary to access virtual classes. If you have any questions about accessing Shiksha Mitra, please email us at shikshaMitra@gmail.com",
    },
    {
      imgUrl: "https://nominbold.github.io/images/tutor.jpg",
      title: "Is private tutoring available?",
      subcontent:"The university is in the progress of providing a dedicated space for peertutor mentoring wherein the...",
      content:
        "The university is in the progress of providing a dedicated space for peertutor mentoring wherein the mentees will be able to get private tutoring from the peer mentor but as of now, the tutoring will be held in online mode.",
    },
    {
      imgUrl:
        "https://sprigghr.com/wp-content/uploads/2020/09/Peer-to-Peer-Learning-e1601041526337.png",
      title: "Why to join Shiksha Mitra",
      subcontent:"Benefits that Peer Mentoring entails are: 1.Professional development.....",
      content:
        "Benefits that Peer Mentoring entails are: <br> 1.Professional development <br> 2. Strong Networing <br> 3. Support <br> 4. Diversity & Inclusion <br> 5. Leadership & Personal Growth <br> 6. Continous Learning <br> Start your journey now!",
    },
  ];
  var x;
  var i = 0;
  console.log(carouselData);
  return (
    <>
      <div id="mainDiv" className=" p-0">
        {/* <!-- NAVBAR  --> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
          <div
            className="container-fluid"
            // style="background-color: var(--navyblue); height: 90px"
            style={{ backgroundColor: " var(--navyblue)", height: "1px" }}
          >
            
          </div>
        </nav>
        {/* BannerCarousel  */}

        {/* pppppp */}
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carouselData[0].imgUrl}
                className="d-block w-100"
                alt="Image 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carouselData[1].imgUrl}
                className="d-block w-100"
                alt="Image 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carouselData[2].imgUrl}
                className="d-block w-100"
                alt="Image 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* pppppp */}

        {/* Our Service  */}
        <div id="OurServicesSection">
          <ServiceSection />
        </div>

        <div id="QuadSection">
          <QuadSection></QuadSection>
        </div>
        <div id="guidesSection">
          <div
            id="thisguidesSection"
            className="p-4"
            style={{ backgroundColor: "var(--navyblue)" }}
          >
            <div className="heading text-center p-2 d-flex justify-content-center align-items-center">
              <h5 className="text-center fw-semibold text-white fs-1 large">
                MENTORING PROGRAM GUIDES
              </h5>
            </div>
            {/* <!-- cardsSection --> */}
            <div
              id="guidingCards"
              className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-center align-items-center"
            >
              {/* FAQ  */}
                {/* fa1  */}
              <div
                id=""
                className="cursor-pointer card col p-2 m-2 position-relative"
                style={{ height: "400px", width: "250px" }}
              >
                <img
                  src={OurGuidlines[0].imgUrl}
                  style={{ filter: "brightness(80%)", width: "100%" ,height:"160px"}}
                  alt="Avatar"
                />
                <div className="container d-block">
                  <h4>
                    <b>{OurGuidlines[0].title}</b>
                  </h4>
                  <div style={{ overflow: "hidden" }}>
                    <p>{OurGuidlines[0].subcontent}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary position-absolute bottom-0 mb-4 openBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Read More
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            {OurGuidlines[0].title}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {OurGuidlines[0].content}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                {/* fa2  */}
                <div
                id=""
                className="cursor-pointer card col p-2 m-2 position-relative"
                style={{ height: "400px", width: "250px" }}
              >
                <img
                  src={OurGuidlines[1].imgUrl}
                  style={{ filter: "brightness(80%)", width: "100%" ,height:"160px"}}
                  alt="Avatar"
                />
                <div className="container d-block">
                  <h4>
                    <b>{OurGuidlines[1].title}</b>
                  </h4>
                  <div style={{ overflow: "hidden" }}>
                    <p>{OurGuidlines[1].subcontent}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary position-absolute bottom-0 mb-4 openBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                  >
                    Read More
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            {OurGuidlines[1].title}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {OurGuidlines[1].content}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* // */}
              {/* fsa3  */}
              <div
                id=""
                className="cursor-pointer card col p-2 m-2 position-relative"
                style={{ height: "400px", width: "250px" }}
              >
                <img
                  src={OurGuidlines[2].imgUrl}
                  style={{ filter: "brightness(80%)", width: "100%" ,height:"160px"}}
                  alt="Avatar"
                />
                <div className="container d-block">
                  <h4>
                    <b>{OurGuidlines[2].title}</b>
                  </h4>
                  <div style={{ overflow: "hidden" }}>
                    <p>{OurGuidlines[2].subcontent}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary position-absolute bottom-0 mb-4 openBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop2"
                  >
                    Read More
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop2"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            {OurGuidlines[2].title}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {OurGuidlines[2].content}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* // */}
              {/* fs4  */}
              <div
                id=""
                className="cursor-pointer card col p-2 m-2 position-relative"
                style={{ height: "400px", width: "250px" }}
              >
                <img
                  src={OurGuidlines[3].imgUrl}
                  style={{ filter: "brightness(80%)", width: "100%" ,height:"160px"}}
                  alt="Avatar"
                />
                <div className="container d-block">
                  <h4>
                    <b>{OurGuidlines[3].title}</b>
                  </h4>
                  <div style={{ overflow: "hidden" }}>
                    <p>{OurGuidlines[3].subcontent}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary position-absolute bottom-0 mb-4 openBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop3"
                  >
                    Read More
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop3"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            {OurGuidlines[3].title}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {OurGuidlines[3].content}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* // */}
            </div>
          </div>
        </div>

        <div id="footerSection"><Footer /></div>
        {/* <!-- SCROLL TO UP ARROW  --> */}
        <div
          id="scrollBtnDiv"
          //   id="scrollTop"
          className="position-fixed text-center z-10 mr-6 rounded-circle"
        >
          <button
            type="button"
            className="btn btn-primary btn-rounded rounded-4 p-2 px-3 fw-bolder"
            // onclick="windowScrollUp()"
          >
            <span className="material-symbols-outlined"> arrow_upward </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default homeV2;
