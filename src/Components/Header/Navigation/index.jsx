import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { RiTShirtLine } from "react-icons/ri";
import Dialog from '@mui/material/Dialog';
import Categories from '../Categories';




const Navigation = ()=> {




   return (
    <nav>
    <div className="container">
        <div className="row align-items-center">
            <Categories/>
            <div className="col-sm-9 navPart2 ">
                <ul className='list list-inline'>
                    <li className='list-inline-item'>
                        <Link to="/home"><Button><GoHome className='icon'/>Home</Button></Link>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="/">
                                <Button>
                                    <IoPhonePortraitOutline className='icon'/> 
                                        Electronics
                                </Button>
                        </Link>
                        <div className='submenu shadow'>
                            <Link to="/">
                                <Button>
                                        Smart Tv
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Smartphones
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Tablets
                                </Button>
                            </Link>

                        </div>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="/"><Button><MdOutlineBakeryDining className='icon'/>Food</Button></Link>
                        <div className='submenu shadow'>
                            <Link to="/">
                                <Button>
                                        Smart Tv
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Smartphones
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Tablets
                                </Button>
                            </Link>

                        </div>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="/"><Button><RiTShirtLine className='icon'/>Clothes</Button></Link>
                        <div className='submenu shadow'>
                            <Link to="/">
                                <Button>
                                        Smart Tv
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Smartphones
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Tablets
                                </Button>
                            </Link>

                        </div>
                    </li>
                    <li className='list-inline-item'>
                        <Link to="/"><Button><MdOutlineEmail className='icon'/>Contact Us</Button></Link>
                        <div className='submenu shadow'>
                            <Link to="/">
                                <Button>
                                        Smart Tv
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Smartphones
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>
                                        Tablets
                                </Button>
                            </Link>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
)
}

export default Navigation