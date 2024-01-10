"use client";

import { useFavoriteBeauticians } from "@/hooks/useFavoriteBeauticians";
import BeauticianCard from "../components/beauticians/BeauticianCard";
import Container from "../components/Container";

const Favorite = () => {
  const { favoriteBeauticians } = useFavoriteBeauticians();
  return (
    <Container>
      <div>Your Favorite Beauticians</div>
      {favoriteBeauticians.map((beautician: any) => {
        return <>{beautician}</>;
      })}
    </Container>
  );
};

export default Favorite;
