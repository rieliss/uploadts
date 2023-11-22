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
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <form action={AddImage} className="grid gap-6">
        <div>
          <div className="space-y-1 mb-4">
            <h2 className="text-xl font-semibold">Upload a file</h2>
            <p className="text-sm text-gray-500">
              Accepted formats: .png, .jpg, .gif, .mp4
            </p>
          </div>
          <label className="group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50">
            <div className="absolute z-[5] h-full w-full rounded-md" />
            <div className="bg-white opacity-100 hover:bg-gray-50">
              <p className="mt-2 text-center text-sm text-gray-500">
                Drag and drop or click to upload.
              </p>
              <p className="mt-2 text-center text-sm text-gray-500">
                Max file size: 50MB
              </p>
            </div>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="file"
                name="file"
                accept="image/*"
                className="sr-only"
                multiple
              />
            </div>
          </label>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
