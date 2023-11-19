"use client";
import { Button } from "@/components/ui/button";
import { AddImage } from "@/function/addImage";
import React from "react";
import { useFormStatus } from "react-dom";

type Props = {};

export default function Upload({}: Props) {
  function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <Button type="submit" size="lg">
        {pending ? "Uploading..." : "Upload"}
      </Button>
    );
  }
  return (
    <form
      action={AddImage}
      className="flex flex-col items-center justify-center gap-y-4 p-24"
    >
      <input
        type="file"
        name="file"
        multiple
        className="border-black-300 border-2 rounded"
      />
      <SubmitButton />
    </form>
  );
}
