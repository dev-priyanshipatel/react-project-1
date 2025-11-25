const CaseStudyCard = ({title, bgColor, whiteTextColor, desTextColor, imgUrl, imgWidth, imgHight}) => {
  return (
    <div className="col-lg-6">
        <div className={`rounded-5 ${bgColor} overflow-hidden`}>
            <div className="card-body p-5 pb-0">
                <h3 className={`fw-medium mb-3 ${whiteTextColor}`}>{title}</h3>
                <p className={`pb-md-4 mb-2 fw-medium ${desTextColor}`}>Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget vel. Convallis diam nunc, vitae, orci, nibh quam tristique pulvinar. In semper etiam aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa.</p>
                <a href="#" className={`text-decoration-none fw-medium ${whiteTextColor}`}>Read case study<i class="ri-arrow-right-line fs-5 ms-2"></i></a>
            </div>
            <div className="d-flex justify-content-end mt-sm-n5 me-n4">
                <img src={imgUrl} width={imgWidth} height={imgHight} alt="img" className="img-fluid"/>
            </div>
        </div>
    </div>
  )
}

export default CaseStudyCard