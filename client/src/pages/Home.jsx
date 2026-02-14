import React,{ useState,useEffect } from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const Home = () => {

  const [topBrands, setTopBrands] = useState([]);

  useEffect(() => { 
    const fetchTopBrands = async () => {
      try {
        const response = await fetch('/api/shoes/topbrands'); 
        const data = await response.json();
        setTopBrands(data);
      } catch (error) {
        console.error('Error fetching top brands:', error);
      }
    };

    fetchTopBrands();
  }, []);
  
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
       
        <div className="prose prose-2xl">
          <ShopBy title="Best Sellers" filter="topbrands" brands={topBrands} />
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
