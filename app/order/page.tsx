"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      <h1 className="text-center mb-10 font-normal mt-5">Purchased products</h1>
      <ul>
        {savedPurchaseInfo?.map((purchase: any, purchaseIndex: number) => (
          <div key={purchaseIndex} className="border-[3px] p-4 mb-4">
            <h2 className="text-lg font-semibold">
              Purchase Date: {new Date(purchase.date).toLocaleString()}
            </h2>
            <ul>
              {purchase.products.map((product: any, productIndex: number) => (
                <li key={productIndex} className="flex items-center mb-2">
                  <Image
                    src={product.selectedImg.image}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <div className="ml-3">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold mt-2">
              Total Amount: {purchase.totalAmount}
            </p>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Order;
