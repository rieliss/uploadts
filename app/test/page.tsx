import FilterValue from "@/components/filter";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col items-center text-center p-12">
      <FilterValue />
    </div>
  );
}
