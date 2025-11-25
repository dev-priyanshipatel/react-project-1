const IndustryCard = ({url , title, li1, li2, li3}) => {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="rounded-5 overflow-hidden shadow-sm client-container">
          <div>
            <img src={url} alt="img" className="img-fluid" />
        </div>
        <div className="p-5 industry-data">
            <h3 className="service-title-color mb-3">{title}</h3>
            <ul className="ps-4 service-des-color">
                <li className="mb-2 h5">{li1}</li>
                <li className="mb-2 h5">{li2}</li>
                <li className="mb-2 h5">{li3}</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default IndustryCard