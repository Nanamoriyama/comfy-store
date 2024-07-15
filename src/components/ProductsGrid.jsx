import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { MdOutlineStar } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-2 sm:gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => {
        const { title, price, image, rating, reviews } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="w-full transition duration-300 p-1 sm:p-4"
          >
            <figure className="relative">
              <img
                src={image}
                alt={title}
                className="h-64 md:h-60 lg:h-80 w-full object-cover"
              />
              <figcaption className="absolute bottom-2 left-2 text-white text-xl  px-2 py-1">
                {title}
              </figcaption>
            </figure>
            <div className="px-1 py-1">
              <span className="text-black text-lg">{dollarsAmount}</span>
              <div className="flex items-center justify-start space-x-1 mt-1">
                {[...Array(4)].map((_, i) => (
                  <MdOutlineStar key={i} className="text-yellow-500 text-md" />
                ))}
                <FaStarHalfAlt className="text-yellow-500 text-xs" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
