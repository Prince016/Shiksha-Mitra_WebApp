import React from 'react'

function QuadSection() {
    const QuadSectionInfo = [
        {
          imgUrl:
            "https://images.indianexpress.com/2017/11/student-money-salary.jpg",
          title: "",
          backgroundColor: "#022d6a",
          textColor: "#022d6a",
        },
        {
          imgUrl: "",
          title: "Get paid for each hour mentored",
          backgroundColor: "#022d6a",
          textColor: "#FFFFFF",
          textStyle: 'italic',
        },

        {
          imgUrl: "",
          title: "Support your peer community with your academic excellence",
          backgroundColor: "#ebf0f7",
          textColor: "#022d6a",
        },
        {
          imgUrl:
            "https://blog.joinknack.com/hubfs/Imported_Blog_Media/Multi-racial-group-of-high-school-students-sitting-in-a-circle-talking-and-holding-laptops-and-tablets.jpg",
          title: "",
          backgroundColor: "#022d6a",
          textColor: "#FFFFFF",
        },
      ];
  return (
   <>
    
    <div
      id="QuadSectionDiv"
     className="row row-cols-1 row-cols-lg-2 ">
        {/* section1  */}
      <div className="section col d-flex justify-content-center align-items-center"
            style={{height: "400px",backgroundSize: "cover",filter: "brightness(90%)",backgroundColor: QuadSectionInfo[0].backgroundColor, backgroundImage:`url(${QuadSectionInfo[0].imgUrl})`}}>
            <div className="fw-bolder fs-5" style={{color:QuadSectionInfo[0].textColor,width:"24rem"}}>
            <h1 style={{textAlign: "center"}}>{ QuadSectionInfo[0].title}</h1>
            </div>
        </div>
        {/* section2  */}
        <div className="section col d-flex justify-content-center align-items-center"
            style={{height: "400px",backgroundSize: "cover",filter: "brightness(90%)",backgroundColor: QuadSectionInfo[1].backgroundColor, backgroundImage:`url(${QuadSectionInfo[1].imgUrl})`}}>
            <div className="fw-bolder fs-5" style={{color:QuadSectionInfo[1].textColor,width:"24rem"}}>
            <h1 style={{textAlign: "center"}}>{ QuadSectionInfo[1].title}</h1>
            </div>
        </div>
        {/* section3 */}
        <div className="section col d-flex justify-content-center align-items-center"
            style={{height: "400px",backgroundSize: "cover",filter: "brightness(90%)",backgroundColor: QuadSectionInfo[2].backgroundColor, backgroundImage:`url(${QuadSectionInfo[2].imgUrl})`}}>
            <div className="fw-bolder fs-5" style={{color:QuadSectionInfo[2].textColor,width:"24rem"}}>
            <h1 style={{textAlign: "center"}}>{ QuadSectionInfo[2].title}</h1>
            </div>
        </div>
        {/* section 4 */}
        <div className="section col d-flex justify-content-center align-items-center"
            style={{height: "400px",backgroundSize: "cover",filter: "brightness(90%)",backgroundColor: QuadSectionInfo[3].backgroundColor, backgroundImage:`url(${QuadSectionInfo[3].imgUrl})`}}>
            <div className="fw-bolder fs-5" style={{color:QuadSectionInfo[3].textColor,width:"24rem"}}>
            <h1 style={{textAlign: "center"}}>{ QuadSectionInfo[3].title}</h1>
            </div>
        </div>

    </div>
  
</>
  )
}

export default QuadSection