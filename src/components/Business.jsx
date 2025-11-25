import Button from "./Button"

const Business = () => {
  return (
    <div className="bg-green py-5">
        <div className="pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3 container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="display-2 fw-semibold text-white">Ready to take your business to the next level?</h1>
                </div>    
                <div className="col-md-6">
                    <div className="ms-lg-5 pt-3 detail">
                        <h4 className="pb-4 mb-2 mb-lg-3 lh-base green-des-color">Massa velitienes semper faucibus tristique id nibh elementum, id eu aliquamd diam mi tempus at laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet.</h4>
                        <div className="d-flex align-items-center justify-content-between p-2 border border-light-subtle rounded-4">
                            <div>
                                <span className="p-3"><i className="ri-mail-line fs-5 text-white"></i></span>
                                <input type="email" placeholder="Enter your email" className="inpt-bg-color border-0 bs-input-placeholder" />
                            </div>
                            <button className="text-white bg-warning border-0 px-4 py-2 rounded-3 fw-semibold">Book a call</button>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="pt-3 text-center d-none d-md-block">
                <img src="/images/arrow.svg" alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Business