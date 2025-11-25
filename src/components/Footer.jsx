import HeaderLogo from "./HeaderLogo"

const Footer = () => {
  return (
    <footer className="pt-lg-5 pt-4 pb-5">
        <div className="container mt-md-2 mt-lg-3">
            <div className="row mb-md-5 mb-4 gy-3">
                <div className="col-lg-4">
                    <div>
                        <HeaderLogo />
                        <p className="service-des-color mt-3  mb-3">The agency with extensive experience that creates marketing strategies for B2B and B2C companies.</p>
                        <div className="d-flex">
                            <a href="#" className="btn rounded-circle ms-3 mt-3 grey-bg-color text-black"><i className="ri-facebook-fill"></i></a>
                            <a href="#" className="btn rounded-circle ms-3 mt-3 grey-bg-color text-black"><i className="ri-instagram-line"></i></a>
                            <a href="#" className="btn rounded-circle ms-3 mt-3 grey-bg-color text-black"><i className="ri-linkedin-fill"></i></a>
                        </div>                    
                    </div>
                </div>
                <div className="col-md-2">
                    <div>
                        <ul className="p-0">
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Services</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Industries</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Clients</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Reviews</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">case studies</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div>
                        <ul className="p-0">
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Contacts</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Help Center</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div>
                        <ul className="p-0">
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">About</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Careers</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">News & insights</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">Industry forecasts</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div>
                        <ul className="p-0">
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">+ 1 526 220 0444</li>
                            <li className="list-unstyled mb-2 service-dis-color fw-semibold">+ 1 526 220 0000</li>
                            <li className="list-unstyled mb-2 text-success  fw-semibold">example@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer