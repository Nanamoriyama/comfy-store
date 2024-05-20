import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle className="featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
