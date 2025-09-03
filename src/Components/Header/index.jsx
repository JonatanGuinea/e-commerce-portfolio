import { Link } from "react-router-dom";




import Logo from "../../assets/Images/logo.png"
import CountryDropdown from "../CountryDropdown/index.jsx";
import SearchBox from "./SearchBox/index.jsx";
import Navigation from "./Navigation/index.jsx";
import Usercart from "./UserCart/index.jsx"




const Header = () => {
    return (
    <>
        <div className="headerWrapper">
            <div className="top-strip">
                <div className="container"> 
                    <p className = "mb-0 mt-0 text-center ">Ofertas <b>EXCLUSIVAS</b> este mes</p>
                </div>
            </div>
        
            <header className="header">
                <div className="container">
                    <div className="row"> 
                        <div className="logoWrapper col-sm-2">
                            <Link to="./">{<img src={Logo} alt="Logo"></img>}</Link>
                        </div>
                        <div className="col-sm-10 part2 ">
                            <CountryDropdown/>
                            <SearchBox/>
                            <Usercart/>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation/>
        </div>
    </>
    )
}

export default Header