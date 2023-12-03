import { products } from "@/utils/products";
import Container from "../components/Container";

const product = () => {
  return (
    <Container>
      <div>
        {products.map((product: any) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
    </Container>
  );
};

export default product;
