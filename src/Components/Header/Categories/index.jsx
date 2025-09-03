import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';

const Categories = ()=>{
    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false)

return (
    <>
    <div className="col-sm-3 navPart1">
                <div className='catWrapper'>
                    <Button className="allCatTab " onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                        <IoMdMenu className='icon1 me-2'/>
                            <span className="text">CATEGORIES</span>
                        <FaAngleDown className='icon2 ms-2'/>
                    </Button>

                    <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open':''}`}>
                        <ul>
                            
                            <li>
                                <Link to="/">
                                    <Button>
                                        Electronics
                                    </Button>
                                </Link>
                                <div className='cat-submenu'>
                                        <Link to="/">
                                            <Button>
                                                    Smart tv
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button>
                                                    Tablets
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button>
                                                    Smart Phones
                                            </Button>
                                        </Link>

                                </div>
                            </li>
                            <li>
                                <Link to="/">
                                <Button>
                                        Food
                                </Button>
                            </Link>
                            <div className='cat-submenu'>
                                        <Link to="/">
                                            <Button>
                                                    Chinesse
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button>
                                                    French
                                            </Button>
                                        </Link>
                                        <Link to="/">
                                            <Button>
                                                    Deutch
                                            </Button>
                                        </Link>

                                </div>
                            </li>
                            <li>
                                <Link to="/">
                                <Button>
                                        Smart Tv
                                </Button>
                            </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <Button>
                                        Smart Tv
                                </Button>
                            </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>    


            </div>
    </>
)

}

export default Categories