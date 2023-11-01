"use client";

import PlacePage from "@/components/place";
import React from "react";

const LocationPage = () => {
  return (
    <main className="p-4">
      <section className="py-12 flex flex-col items-center text-center gap-y-8">
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <PlacePage
            Name="1007597"
            Img="/uploads/1007597.jpg"
            Description="name"
          />
          <PlacePage
            Name="1007508"
            Img="/uploads/1007508.jpg"
            Description="name"
          />
          {/* <PlacePage
            Name="1007017"
            Img="/uploads/1007017.jpg"
            Description="name"
          />
          <PlacePage
            Name="1007171"
            Img="/uploads/1007171.png"
            Description="name"
          />
          <PlacePage
            Name="1007555"
            Img="/uploads/1007555.png"
            Description="name"
          />
          <PlacePage
            Name="1007999"
            Img="/uploads/1007999.png"
            Description="name"
          />
          <PlacePage
            Name="1007599"
            Img="/uploads/1007599.jpg"
            Description="name"
          />
          <PlacePage
            Name="1007508"
            Img="/uploads/1007508.jpg"
            Description="name"
          />
          <PlacePage
            Name="1007017"
            Img="/uploads/1007017.jpg"
            Description="name"
          />
          <PlacePage
            Name="1007171"
            Img="/uploads/1007171.png"
            Description="name"
          />
          <PlacePage
            Name="1007555"
            Img="/uploads/1007555.png"
            Description="name"
          />
          <PlacePage
            Name="1007999"
            Img="/uploads/1007999.png"
            Description="name"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
