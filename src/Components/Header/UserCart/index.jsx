
import { FaRegUser } from "react-icons/fa";

import { FiShoppingCart } from "react-icons/fi";
import Button from '@mui/material/Button';

const Usercart = () =>{
    return (
        <>
        <div className="part3 ">
                                <Button className="circle me-3"><FaRegUser /></Button>

                                <div className="ml-auto cartTab" >
                                    <span className="price">$3.29</span>
                                    <Button className="circle ms-1"><FiShoppingCart /><div className="count">n</div></Button>
                                </div>

                            </div>
        </>                    
    )
}

export default Usercart