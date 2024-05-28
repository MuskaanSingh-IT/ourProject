import React  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from "./banner1.jpeg";
import banner2 from "./banner2.jpeg";
import banner3 from "./banner3.jpeg";
import banner4 from "./banner4.jpeg";


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust speed as needed
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Banner 1" className='w-full' />
      </div>
      <div>
        <img src={banner2} alt="Banner 2"className='w-full' />
      </div>
      <div>
        <img src={banner3} alt="Banner 3" className='w-full'/>
      </div>
      <div>
        <img src={banner4} alt="Banner 4" className='w-full'/>
      </div>
      {/* Add more <div> elements for additional banners */}
    </Slider>
  );
};

export default BannerSlider;