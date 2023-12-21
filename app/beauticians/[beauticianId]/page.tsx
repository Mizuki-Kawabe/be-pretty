import { beautician } from "@/utils/beautician";
import BeauticianDetails from "./BeauticianDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("prams", params);
  return (
    <>
      <div className="container m-auto">
        <BeauticianDetails beautician={beautician} />
      </div>
    </>
  );
};

export default Product;
