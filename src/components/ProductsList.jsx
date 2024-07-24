import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { MdOutlineStar } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-4 space-y-4">
      {products.map((product) => {
        const { title, price, image, rating, reviews, colors } =
          product.attributes;
        const dollarsAmount = formatPrice(price);
        const [productColor, setProductColor] = useState(colors[0]);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="flex items-center space-x-4 p-1 sm:p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <figure className="flex-shrink-0 w-32 h-32 ">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover "
              />
            </figure>
            <div className="flex flex-col flex-grow">
              <h2 className="text-lg font-bold capitalize tracking-wider">
                {title}
              </h2>
              <div className="flex items-center justify-start space-x-1">
                {[...Array(4)].map((_, i) => (
                  <MdOutlineStar key={i} className="text-yellow-500 text-lg" />
                ))}
                <FaStarHalfAlt className="text-yellow-500 text-sm" />
              </div>
              <div className="flex space-x-1">
                {colors.map((color, index) => {
                  const colorMap = {
                    // Define your color mappings here
                    white: "#f5f2f2",
                    green: "#00FF00",
                    blue: "#0000FF",
                    yellow: "#FFFF00",
                    // Add more colors as needed
                  };

                  const buttonColor = colorMap[color] || color; // Use the colorMap or fallback to the color value

                  return (
                    <button
                      key={index}
                      type="button"
                      className={`w-6 h-6 rounded-full ${
                        color === productColor
                          ? "border-2 border-secondary"
                          : ""
                      }`}
                      style={{ backgroundColor: buttonColor }}
                      onClick={(e) => {
                        e.preventDefault();
                        setProductColor(color);
                      }}
                    />
                  );
                })}
              </div>
              <span className="text-black">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
