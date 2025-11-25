import IndustriesCard from "./IndustryCard";

const Industries = () => {
  return (
    <div className="container p-4 mb-4">
        <div className="service-container text-center py-5 pb-0">
            <h1 className="service-title-color fw-bold mb-4">Industries we work in</h1>
            <p className="service-des-color pb-4 mb-2 mb-lg-3 h5">We have been helping businesses in the following industries for over a decade</p>
        </div>
        <div className="row p-4 gy-3">
            <IndustriesCard 
              url = "/images/ind-1.jpg"
              title = "Services"
              li1 = "Id habitasse dui habitant"
              li2 = "Rutrum tempor sit tincidunt"
              li3 = "Imperdiet est quis enim facilisis"/>

            <IndustriesCard 
              url = "/images/ind-2.jpg"
              title = "Retail"
              li1 = "Ultrices volutpat sit mattis"
              li2 = "Egestas neque arcu duis"
              li3 = "Metus magna viverra blandit" />

            <IndustriesCard 
              url = "/images/ind-3.jpg"
              title = "Technology"
              li1 = "Diam diam nunc monte"
              li2 = "Nulla egestas arcu proin sit"
              li3 = "Nunc sapien turpis vulputate" />
        </div>
    </div>
  )
}

export default Industries