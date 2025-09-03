import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';
import { useState } from "react";

import React from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const CountryDropdown = ()=>{
        const [isOpenModal, setisOpenModal] = useState(false);

        const handleModal = ()=>{

            setisOpenModal((prev) => !prev)
        }
        return (
            <>
            <Button className="countryDrop" onClick={handleModal}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">Argentina</span>
                </div>
                    <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog  slots={{transition: Transition}} onClose={handleModal} open={isOpenModal}>
                <div className="countryModal">

                    <h4>Choose Your delivery location</h4>
                    <Button className="close_" onClick={handleModal}><IoMdClose /></Button>
                    <p>Enter your adress.</p>

                    <div className="headerSearch">
                        <input type="text" placeholder="Search your area..."/>
                        <Button><IoIosSearch /></Button> 
                    </div>

                    <ul className="countryList mt-3">
                        <li><Button onClick={handleModal}>Argentina</Button></li>
                        <li><Button onClick={handleModal}>EEUU</Button></li>
                        <li><Button onClick={handleModal}>Noruega</Button></li>
                        <li><Button onClick={handleModal}>Argentina</Button></li>
                        <li><Button onClick={handleModal}>EEUU</Button></li>
                        <li><Button onClick={handleModal}>Noruega</Button></li>
                        <li><Button onClick={handleModal}>Argentina</Button></li>
                        <li><Button onClick={handleModal}>EEUU</Button></li>
                        <li><Button onClick={handleModal}>Noruega</Button></li>
                        <li><Button onClick={handleModal}>Argentina</Button></li>
                        <li><Button onClick={handleModal}>EEUU</Button></li>
                        <li><Button onClick={handleModal}>Noruega</Button></li>
                        <li><Button onClick={handleModal}>Argentina</Button></li>
                        <li><Button onClick={handleModal}>EEUU</Button></li>
                        <li><Button onClick={handleModal}>Noruega</Button></li>
                        <li><Button onClick={handleModal}>Argentina</Button></li>
                        <li><Button onClick={handleModal}>EEUU</Button></li>
                        <li><Button onClick={handleModal}>Noruega</Button></li>
                    </ul>
               </div>
            </Dialog>
            </>
        )
}

export default CountryDropdown