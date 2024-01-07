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

  return (
    <Container>
      <BeauticianDetails beautician={beautician} />
    </Container>
  );
};

export default Beautician;
