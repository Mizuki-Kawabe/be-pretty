import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("prams", params);
  return (
    <>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </>
  );
};

export default Product;
