import React from "react";
import Slider from "react-slick";

const HomeBanner = () =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
    }
    return (
        <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                <div className="item">
                    <img src="https://http2.mlstatic.com/D_NQ_944395-MLA83017655050_032025-OO.webp" alt="" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://http2.mlstatic.com/D_NQ_944395-MLA83017655050_032025-OO.webp" alt="" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://http2.mlstatic.com/D_NQ_973185-MLA88014954088_072025-OO.webp" alt="" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://http2.mlstatic.com/D_NQ_716350-MLA88560909249_072025-OO.webp" alt="" className="w-100"/>
                </div>
            </Slider>
            </div>
        </>                    
    )
}

export default HomeBanner