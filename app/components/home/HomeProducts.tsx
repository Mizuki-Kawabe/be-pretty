import Container from "../Container";
import { products } from "@/utils/products";
import ProductCard from "@/app/products/ProductCard";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function HomeProducts() {
  const shuffledProducts = [...products];
  shuffleArray(shuffledProducts);
  const randomProducts = shuffledProducts.slice(0, 4);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {randomProducts.map((product: any) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

export default HomeProducts;
