import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const AdvertisePage = () => {
  const { data: adevertise = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(
        `https://phone-garage-server-xi.vercel.app/advertise/item`
      );
      const data = await res.json();
      return data;
    },
  });

  if (adevertise.adevertise === false) {
    return <></>;
  }

  return (
    <>
      <div className="my-20 px-4 lg:px-10 items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 uppercase">
          Advertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center md:gap-6">
          {adevertise.map((ad) => (
            <AdvertiseCard key={ad._id} ad={ad} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AdvertisePage;
