import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <div className="container my-4">
        <div className="service-container text-center py-5 pb-0">
            <h1 className="service-title-color fw-bold mb-4">Our Services</h1>
            <p className="service-des-color pb-4 mb-2 mb-lg-3 h5">We provide a wide range of consulting services</p>
        </div>
        <div className="py-5 my-4">
            <div className="row gy-4">
                <ServiceCard
                  url = "/images/add.svg"
                  title = "Advertising communications" 
                  des = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit."
                  />
                <ServiceCard 
                  url = "/images/marketing.svg"
                  title = "Marketing and branding"
                  des = "Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue."
                  />
                <ServiceCard 
                  url = "/images/web.svg"
                  title = "Web and Internet marketing"
                  des = "Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non."
                  />
                <ServiceCard 
                  url = "/images/email.svg"
                  title = "Email marketing"
                  des = "Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam ultrices interdum vitae vestibulum."
                  />
                <ServiceCard
                  url = "/images/communication.svg"
                  title = "Working on communication"
                  des = "Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum orci malesuada platea."
                  />
                <ServiceCard
                  url = "/images/business.svg"
                  title = "Business copywriting"
                  des = "Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in lacus in ullamcorper diam consequat."
                  />
            </div>
        </div>
    </div>
  )
}

export default Services