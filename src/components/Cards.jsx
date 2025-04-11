import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Sample Data
const categories = {
  "Film Locations": [
    { id: 1, title: "Ghora Katora", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/ghora_katora/ghora-katora.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg" },
    { id: 2, title: "Sabhyata Dwar", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b4/c9/00/caption.jpg?w=300&h=300&s=1" },
    { id: 3, title: "Waterfall", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a5/91/4c/amritdhara-water-fal.jpg?w=600&h=-1&s=1" },
    { id: 4, title: "Eco Park", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/55/22/85/20171225-144241-largejpg.jpg?w=500&h=400&s=1" },
    { id: 5, title: "Buddha Smriti", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d4/7a/30/buddha-smriti-park.jpg?w=500&h=400&s=1" },
    { id: 6, title: "Glass Bridge", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzYVUcUsMBY8MLXd5wj87WyDZzM1SdtY4WA&s" },
    { id: 7, title: "Kakolat Waterfall", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAC2njZ5j8j4LGJqHITNWB9IvNodG-O2eu8A&s" },
    { id: 8, title: "Sabhyata Dwar", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b4/c9/00/caption.jpg?w=300&h=300&s=1" },
    { id: 9, title: "Glass Bridge", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzYVUcUsMBY8MLXd5wj87WyDZzM1SdtY4WA&s" },
  ],
};

const FilterableCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("Film Locations");
  const [index, setIndex] = useState(0);

  const cards = categories[selectedCategory];

  // Carousel config
  const cardWidth = 288; // w-72 in px
  const gap = 24;        // gap-6 = 24px
  const visibleCards = 3.5;
  const scrollStep = 3; // how many cards to scroll per arrow click

  const maxIndex = Math.max(cards.length - visibleCards, 0);
  const totalSteps = Math.ceil(maxIndex / scrollStep);

  const nextSlide = () => {
    const nextIndex = index + scrollStep;
    setIndex(nextIndex > maxIndex ? 0 : nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = index - scrollStep;
    setIndex(prevIndex < 0 ? Math.max(cards.length - Math.floor(visibleCards), 0) : prevIndex);
  };

  return (
    <div className="w-full flex flex-col py-20 items-center justify-center bg-black">
      <h1 className="text-4xl font-bold mb-8 text-white">Top Shooting Locations</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setIndex(0);
            }}
            className={`px-4 py-2 rounded-lg text-lg ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative w-[90%] max-w-[1200px] mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${index * (cardWidth + gap)}px)`
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className={`w-72 h-80 relative rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out bg-gray-900 ${
                  idx === index + 3 ? "opacity-40 -translate-x-6" : "hover:scale-95"
                }`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-2 left-0 w-full text-white text-start text-xl font-bold p-4">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default FilterableCarousel;
