import { Button } from "@/components/ui/button";
import { AddImage } from "@/function/addImage";
import React from "react";

type Props = {};

export default function Upload({}: Props) {
  return (
    <form
      action={AddImage}
      className="flex flex-col items-center justify-center gap-y-4 p-24"
    >
      <input
        type="text"
        name="type"
        className="border-black-300 border-2 rounded"
      />
      <input
        type="file"
        name="file"
        multiple
        className="border-black-300 border-2 rounded"
      />
      <Button type="submit" size="lg">
        Upload
      </Button>
    </form>
  );
}
