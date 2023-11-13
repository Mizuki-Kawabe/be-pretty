import { products } from "@/utils/products";
import ProductCard from "./ProductCard";
import * as React from "react";
import CenteredTabs from "./CenteredTabs";

const Products = () => {
  return (
    <>
      {/* <CenteredTabs/> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
