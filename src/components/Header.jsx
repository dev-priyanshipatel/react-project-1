import Button from "./Button"
import HeaderLogo from "./HeaderLogo"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="header container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex justify-content-start">
            <HeaderLogo/>
            <Navbar/>
        </div>
        <div className="d-flex align-items-center">
            <Button 
              text = "Buy Now"
              icon = {<i className="ri-shopping-cart-line pe-2"></i>}
              />
        </div>
    </div>
  )
}

export default Header