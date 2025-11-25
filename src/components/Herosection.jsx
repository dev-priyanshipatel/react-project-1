const Herosection = () => {
  return (
    <div className="pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5 container">
        <div className="align-items-center row gy-4">
            <div className="col-lg-5">
                <div>
                    <h1 className="display-3 text-center text-lg-start pb-sm-2 pb-md-3 service-title-color  fw-semibold">The effective solutions for your business</h1>
                    <p className="h5 service-des-color text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5 fw-normal">We are a team who creates marketing strategies for B2B and B2C companies.</p>
                    <div className="d-flex align-items-center justify-content-between p-2 border border-light-subtle rounded-4">
                            <div>
                                <span className="p-3"><i className="ri-mail-line fs-5 text-dark-emphasis"></i></span>
                                <input type="email" placeholder="Enter your email" className="border-0 " />
                            </div>
                            <button className="text-white bg-success border-0 px-4 py-2 rounded-3 fw-semibold">Book a call</button>
                        </div>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="d-flex align-content-center justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0  ">
                    <img src="/images/hero-img.png" alt="img" className="img-fluid"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection