"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Order = () => {
  const [savedPurchaseInfo, setSavedPurchaseInfo] = useState<any[] | null>(
    null
  );

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
      router.refresh();
    }
  }, []);

  useEffect(() => {
    const savedInfoString = localStorage.getItem("purchaseInfo");

    if (savedInfoString) {
      const savedInfo = JSON.parse(savedInfoString);

      savedInfo.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setSavedPurchaseInfo(savedInfo);
    }
  }, []);

  return (
    <Container>
      <h1 className="text-center mb-10 font-normal">Purchased products</h1>
      <ul>
        {savedPurchaseInfo?.map((purchase: any, purchaseIndex: number) => (
          <div key={purchaseIndex}>
            <h2>Purchase Date: {purchase.date}</h2>
            <ul>
              {purchase.products.map((product: any, productIndex: number) => (
                <li key={productIndex}>Product ID: {product.id}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Order;
