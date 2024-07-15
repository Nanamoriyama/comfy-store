import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import hero10 from "../assets/hero10.jpg";

const carouselImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-1 lg:order-2 lg:flex lg:justify-end">
        <img
          src={hero5}
          alt="Hero Image"
          className="w-full h-auto lg:max-w-4xl"
        />
      </div>
      <div className="mx-4 order-2 lg:order-1 lg:col-start-2 lg:row-start-1">
        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl">
          Create your living room
        </h1>
        <p className="mt-8 text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/products"
            className="w-1/3 border border-gray-400 p-4 hover:border-black items-center flex justify-center whitespace-nowrap"
          >
            Shop The Look
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:col-start-1 lg:col-span-2 lg:row-start-2 justify-center items-center p-4 space-x-4 rounded-box overflow-x-auto scrollbar-visible bg-gray-300 gap-2">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="h-64 w-64 object-cover"
                alt="carousel"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
