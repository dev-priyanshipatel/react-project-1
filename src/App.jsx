import Header from './components/Header'
import "../src/App.css"
import Client from './components/Client'
import Services from './components/Services'
import Industries from './components/Industries'
import Casestudies from './components/Casestudies'
import Business from './components/Business'
import Button from './components/Button'
import Footer from './components/Footer'
import Herosection from './components/Herosection'

const App = () => {
  return (
    <div>
        <Header />
        <Herosection />
        <Client />
        <Services />
        <Industries />
        <Casestudies />
        <Business />
        <Footer />
    </div>
  )
}

export default App