import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  clientImg,clientImg2, clientImg1} from '../images/index'
import '../css/clientSlider.css'
const clients = [
  {
    image: clientImg,
    name: "Client 1",
    location: "Dubai, United Arab Emirates"
  },
  {
    image: clientImg1,
    name: "Client 2",
    location: "Amsterdam, Netherlands"
  },
  {
    image: clientImg2,
    name: "Client 3",
    location: "California, USA"
  }
];

const ClientSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true
  };

  return (
    <div className="max-w-5xl mx-auto py-12">
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="px-2">
            <div className="relative group">
              <img
                src={client.image}
                alt={client.name}
                className="rounded-lg mx-auto transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              {/* Overlay Drag Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-gray-700">
                Drag
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-medium">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
