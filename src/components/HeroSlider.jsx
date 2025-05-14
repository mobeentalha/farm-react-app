import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <div className="h-screen w-full">
      <Swiper loop>
        <SwiperSlide>
          <div 
            className="relative h-screen bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=cEVP3uj34-5obt-Jf_WI3O9qfP6tVrFaQIv1rBvvpzc=')`, 
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <motion.div
              className="absolute bottom-32 left-16 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold">From Our Farms<br />To Your Hands</h1>
            </motion.div>
          </div>
        </SwiperSlide>
        {/* Add more slides similarly */}
      </Swiper>
    </div>
  );
}
