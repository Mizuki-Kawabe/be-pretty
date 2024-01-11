"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface FavoritesBeauticiansContextType {
  favoriteBeauticiansId: string[];
  addFavorite: (beauticianId: string) => void;
  removeFavorite: (beauticianId: string) => void;
  isFavorite: (beauticianId: string) => boolean;
}

const FavoritesBeauticiansContext = createContext<
  FavoritesBeauticiansContextType | undefined
>(undefined);

interface FavoriteBeauticiansProviderProps {
  children: ReactNode;
}

export const FavoriteBeauticiansProvider: React.FC<
  FavoriteBeauticiansProviderProps
> = ({ children }) => {
  const [favoriteBeauticiansId, setFavoriteBeauticians] = useState<string[]>(
    () => {
      // Load initial favorites from local storage
      const storedFavorites = localStorage.getItem("favoriteBeauticians");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
  );

  const addFavorite = (beauticianId: string) => {
    setFavoriteBeauticians((prev) => {
      const updatedFavorites = [...prev, beauticianId];

      return updatedFavorites;
    });
  };

  const removeFavorite = (beauticianId: string) => {
    setFavoriteBeauticians((prev) => prev.filter((id) => id !== beauticianId));
  };

  useEffect(() => {
    localStorage.setItem(
      "favoriteBeauticians",
      JSON.stringify(favoriteBeauticiansId)
    );
  }, [favoriteBeauticiansId]);

  const isFavorite = (beauticianId: string) => {
    return favoriteBeauticiansId.includes(beauticianId);
  };

  return (
    <FavoritesBeauticiansContext.Provider
      value={{ favoriteBeauticiansId, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesBeauticiansContext.Provider>
  );
};

export const useFavoriteBeauticians = () => {
  const context = useContext(FavoritesBeauticiansContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
