import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import Container from "../components/Container";
import ProductCard from "../components/products/ProductCard";

const product = () => {
  return (
    <>
      <div className="bg-tan w-full h-52 flex items-center">
        <Container>
          <div className="h-full">
            <div className="font-bold text-mb text-4xl">Products</div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default product;
