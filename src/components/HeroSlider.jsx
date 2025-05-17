import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../images/slider.png";
import sliderImg1 from "../images/slider1.webp";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {[sliderImg, sliderImg1].map((img, index) => (
          <div key={index} className="relative h-screen w-full">
            <img
              src={img}
              alt="slider"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10">
              <p className="text-sm mb-2">Welcome To TenTwenty Farms</p>
              <h1 className="text-5xl font-light leading-tight">
                From Our Farms <br /> To Your Hands
              </h1>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation like the "Next" preview at bottom left */}
      <div className="absolute bottom-10 left-10 flex items-center gap-4 z-10">
        <div className="relative w-24 h-16 overflow-hidden border-4 border-white">
          <img
            src={sliderImg1}
            alt="Next"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm">
            Next
          </div>
        </div>
        <div className="text-white text-sm">
          <span className="font-semibold">01</span> / 04
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
