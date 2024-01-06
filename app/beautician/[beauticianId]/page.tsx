import Container from "@/app/components/Container";
import { beautician } from "@/utils/beautician";
import { beauticians } from "@/utils/beauticians";

interface IPrams {
  beauticianId?: number;
}

const Beautician = ({ params }: { params: IPrams }) => {
  console.log("prams", params);

  const beautician = beauticians.find(
    (item) => item.id === params.beauticianId
  );
  return (
    <>
      <Container>
        <></>
      </Container>
    </>
  );
};

export default Beautician;
