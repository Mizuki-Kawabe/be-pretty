import Container from "@/app/components/Container";
import { beauticians } from "@/utils/beauticians";
import BeauticianDetails from "./BeauticianDetails";

interface IPrams {
  beauticianId?: string;
}

const Beautician = ({ params }: { params: IPrams }) => {
  console.log("prams", params);

  const beautician = beauticians.find(
    (item) => item.id === params.beauticianId
  );

  if (!beautician) {
    return <div>Beautician not found</div>;
  }

  return <BeauticianDetails beautician={beautician} />;
};

export default Beautician;
