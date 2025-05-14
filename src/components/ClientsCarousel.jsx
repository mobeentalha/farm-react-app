import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Sample client images
const clients = [
  {
    image: "/assets/client-1.jpg",
    caption: "Client 1",
    location: "Dubai, United Arab Emirates",
  },
  {
    image: "/assets/client-2.jpg",
    caption: "Client 2",
    location: "Abu Dhabi, United Arab Emirates",
  },
  {
    image: "/assets/client-3.jpg",
    caption: "Client 3",
    location: "Sharjah, United Arab Emirates",
  },
];

export default function ClientsCarousel() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Clients
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={client.image}
                alt={client.caption}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">{client.caption}</h3>
              <p className="text-sm text-gray-500">{client.location}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
