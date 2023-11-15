"use client";

interface BeauticianDetailsProps {
  beautician: any;
}

const ProductDetails: React.FC<BeauticianDetailsProps> = ({ beautician }) => {
  return (
    <>
      <div>{beautician.name}</div>
    </>
  );
};

export default ProductDetails;
