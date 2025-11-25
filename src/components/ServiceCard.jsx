const ServiceCard = ({url,title, des}) => {
  return (
    <div className="col-lg-4 col-sm-6">
        <div className="py-5 pb-2 px-4 client-container rounded-5 service-card">
            <div>
              <img src={url} alt="image" className="mb-4 img-fluid"/>
              <h3 className="service-title-color mb-3">{title}</h3>
              <p className="service-des-color card-text fw-normal">{des}</p>
            </div>
            <div className="arrow-wrapper py-4 mb-3">
              <div className="circle-btn">
                  <i className="ri-arrow-right-line"></i>                                                         
              </div>  
            </div>
        </div>
    </div>
  )
}

export default ServiceCard