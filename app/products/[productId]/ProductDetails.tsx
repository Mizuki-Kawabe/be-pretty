'use client';

interface ProductDetailsProps{
  product: any;
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {


  return ( <>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>Images</div>
    <div><h2 className="text-3xl font-medium text-md">{product.name}</h2>
      {/* <Rating value={} readOnly/> */}
    </div>
  </div>
  </> );
}
 
export default ProductDetails;