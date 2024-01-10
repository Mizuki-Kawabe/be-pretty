"use client";

import { useFavoriteBeauticians } from "@/hooks/useFavoriteBeauticians";
import BeauticianCard from "../components/beauticians/BeauticianCard";
import Container from "../components/Container";
import { beauticians } from "@/utils/beauticians";

const Favorite = () => {
  const { favoriteBeauticiansId } = useFavoriteBeauticians();

  const favoriteBeauticiansArray = beauticians.filter((obj) =>
    favoriteBeauticiansId.includes(obj.id)
  );

  return (
    <Container>
      <h1 className="mt-10 font-normal text-center">
        Your Favorite Beauticians
      </h1>
      <div className="my-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-7 justify-center justify-items-center">
        {favoriteBeauticiansArray.map((b: any) => {
          return <BeauticianCard key={b.id} data={b} />;
        })}
      </div>
    </Container>
  );
};

export default Favorite;
