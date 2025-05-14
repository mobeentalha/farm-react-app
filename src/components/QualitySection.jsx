import React from "react";
import { motion } from 'framer-motion';

export default function QualitySection() {
  return (
    <section className="text-center py-20 px-6 bg-white">
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Quality Products
      </motion.h2>
      <p className="max-w-xl mx-auto text-gray-600">Lorem ipsum dolor sit amet, consectetur...</p>
    </section>
  );
}
