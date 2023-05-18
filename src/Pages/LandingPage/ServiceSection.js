import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import resourcesImg from "../../iconResources/resourcesImg.png";
import peertopeer from "../../iconResources/peer-to-peer.png";
import popular from "../../iconResources/popular.png";
import sch from "../../iconResources/sch.png";
import "./homeV2.css";

function ServiceSection() {
  const OurServiceInfo = [
    {
      icon: resourcesImg,
     
      title: "Get Resources",
      content: "Get resources on one platform                       ",
    },
    {
      icon: peertopeer,
      title: "Raise Request",
      content: "Raise a request for academic support/ doubt clearance",
    },
    {
      icon: sch,
      title: "Scheduling",
      content: "Schedule a class as per convenience",
    },
    {
      icon: popular,
      title: "Popularity",
      content: "Star Mentors for highest tutoring hours and best feedback",
    },
  ];
  var e;

  return (
    <div>
      <div
        className="serviceContainer p-4"
        style={{ backgroundColor: "var(--navyblue)" }}
      >
        {/* <!-- DIVIDER 1  --> */}
        <div className="hrDivider d-flex justify-content-center align-items-center">
          <hr
            className="bg-white fw-semibold"
            style={{ height: "1px", width: "30%" }}
          ></hr>
          <h5 className="px-5 text-center fw-semibold text-white fs-1 large">
            Highlights
          </h5>
          <hr
            className="bg-white fw-semibold"
            style={{ height: "1px", width: "30%" }}
          />
        </div>
        {/* <!-- SECTION 1 CARD  --> */}
        <div className="py-auto d-flex justify-content-center align-items-center">
          <div id="serviceCards" className="row">
            {/* card1 */}
            <div className
            ="col-sm d-flex justify-content-center align-items-center">
              <div className="card my-2" style={{width: "18rem", height:"14rem"}}>
                <div className="card-body">
                  <div className="serviceCardImg d-flex justify-content-center align-items-center">
                    {/* <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="" style={{height:"60px",width:"60px"}}> */}
                    <img src= {OurServiceInfo[0].icon} alt="" style={{height:"60px",width:"60px"}}>
                      
                    </img>
                  </div>
                  <h5 className="card-title serviceCardTitle text-center">
                  {OurServiceInfo[0].title}
                  </h5>
                  <div className="d-flex justify-content-center">
                    <hr className="bg-black" style={{height:"1px",width:"50%"}}></hr>
                  </div>
                  <p className="card-text serviceCardContent text-center">
                  {OurServiceInfo[0].content}
                  </p>
                </div>
              </div>
            </div>
          {/* card2 */}
          <div className="col-sm d-flex justify-content-center align-items-center">
              <div className="card my-2" style={{width: "18rem", height:"14rem"}}>
                <div className="card-body">
                  <div className="serviceCardImg d-flex justify-content-center align-items-center">
                    {/* <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="" style={{height:"60px",width:"60px"}}> */}
                    <img src= {OurServiceInfo[1].icon} alt="" style={{height:"60px",width:"60px"}}>
                      
                    </img>
                  </div>
                  <h5 className="card-title serviceCardTitle text-center">
                  {OurServiceInfo[1].title}
                  </h5>
                  <div className="d-flex justify-content-center">
                    <hr className="bg-black" style={{height:"1px",width:"50%"}}></hr>
                  </div>
                  <p className="card-text serviceCardContent text-center">
                  {OurServiceInfo[1].content}
                  </p>
                </div>
              </div>
            </div>
            {/* card3 */}

            <div className="col-sm d-flex justify-content-center align-items-center">3              <div className="card my-2" style={{width: "18rem", height:"14rem"}}>
                <div className="card-body">
                  <div className="serviceCardImg d-flex justify-content-center align-items-center">
                    {/* <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="" style={{height:"60px",width:"60px"}}> */}
                    <img src= {OurServiceInfo[2].icon} alt="" style={{height:"60px",width:"60px"}}>
                      
                    </img>
                  </div>
                  <h5 className="card-title serviceCardTitle text-center">
                  {OurServiceInfo[2].title}
                  </h5>
                  <div className="d-flex justify-content-center">
                    <hr className="bg-black" style={{height:"1px",width:"50%"}}></hr>
                  </div>
                  <p className="card-text serviceCardContent text-center">
                  {OurServiceInfo[2].content}
                  </p>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="col-sm d-flex justify-content-center align-items-center">
              <div className="card my-2" style={{width: "18rem", height:"14rem"}}>
                <div className="card-body">
                  <div className="serviceCardImg d-flex justify-content-center align-items-center">
                    {/* <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="" style={{height:"60px",width:"60px"}}> */}
                    <img src= {OurServiceInfo[3].icon} alt="" style={{height:"60px",width:"60px"}}>
                      
                    </img>
                  </div>
                  <h5 className="card-title serviceCardTitle text-center">
                  {OurServiceInfo[3].title}
                  </h5>
                  <div className="d-flex justify-content-center">
                    <hr className="bg-black" style={{height:"1px",width:"50%"}}></hr>
                  </div>
                  <p className="card-text serviceCardContent text-center">
                  {OurServiceInfo[3].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
