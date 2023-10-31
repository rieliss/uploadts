"use client";
import PlacePage from "@/components/place";
import { useRouter } from "next/navigation";
import React from "react";

const LocationPage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <section className="py-2 flex flex-col items-center text-center gap-8">
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <PlacePage
            Name="7294811"
            Link=""
            Img="/image/7294811.jpg"
            Description="name"
          />
          <PlacePage
            Name="7309681"
            Link=""
            Img="/image/7309681.jpg"
            Description="name"
          />
          <PlacePage
            Name="7309683"
            Link=""
            Img="/image/7309683.jpg"
            Description="name"
          />
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
