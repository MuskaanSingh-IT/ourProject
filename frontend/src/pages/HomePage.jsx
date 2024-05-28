import React from 'react'
import Header from "../components/Layout/Header";
//import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Footer from "../components/Layout/Footer";
import BannerSlider from './banner/Banner';
// import banner1 from "./banner1.jpeg";
// import banner2 from "./banner2.jpeg";
// import banner3 from "./banner3.jpeg";


//const banners = [{banner1}, {banner2}, {banner3}];


const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        {/*<Hero />*/}
        <BannerSlider />

        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Footer />
    </div>
  )
}

export default HomePage