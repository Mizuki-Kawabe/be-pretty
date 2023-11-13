import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("prams", params);
  return (
    <>
      <div className="container m-auto">
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Product;
