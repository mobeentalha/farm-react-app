import React from "react";
import NavbarComponent from './components/NavbarComponent';
import HeroSlider from "./components/HeroSlider";
import QualitySection from "./components/QualitySection";
import ClientsCarousel from "./components/ClientsCarousel";

export default function App() {
  return (
    <div className="font-sans">
      <NavbarComponent />
      <main className="pt-20">
        <HeroSlider />
        <QualitySection />
        <ClientsCarousel />
      </main>
    </div>
  );
}
