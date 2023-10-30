import { products } from "@/utils/products";
import { Container } from "@mui/material";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import ProductCard from "./ProductCard";
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';


const Products = () => {
  return ( <>
  <NavBar/>
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
       {products.map((product:any) =>{
        return <ProductCard key={product.id} data={product}/>
       })}
      </div>
    </Container>
  <Footer/>
  </>
  );
}
 
export default Products;