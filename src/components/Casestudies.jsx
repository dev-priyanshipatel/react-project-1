import Button from "./Button"
import CaseStudyCard from "./CaseStudyCard"

const Casestudies = () => {
  return (
    <div className="container pt-2 pt-sm-4 pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 service-title-color text-center fw-bolder pb-3 pb-lg-4">Recent case studies</h2>
            <div className="border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
              <div className="row g-4">
                <CaseStudyCard 
                title = "Robotics & artificial intelligence"
                bgColor = "bg-green"
                whiteTextColor = "text-white"
                desTextColor = "green-des-color"
                imgUrl = "/images/caseImg1.png"
                imgWidth = "347"
                imgHight = "265"
                />
                <CaseStudyCard 
                title = "Toothbrush from natural eco materials"
                bgColor = "bg-light-green"
                whiteTextColor = "green-text-color"
                desTextColor = "green-text-color"
                imgUrl = "/images/caseImg2.png"
                imgWidth = "250"
                imgHight = "270"
                />
              </div>
            </div>
            <div className="text-center my-2 mt-sm-3 mt-lg-0 pt-4 pb-1 pb-sm-3 pb-md-4 pt-lg-5">
                <a href="#"><Button 
                    text = "Read all case studies"/></a>
            </div>
    </div>
  )
}

export default Casestudies