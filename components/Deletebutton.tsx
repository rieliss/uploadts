"use client";
import React from "react";
import { useFormStatus } from "react-dom";

type Props = {};

export default function Deletebutton({}: Props) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="border bg-red-400 rounded-lg">
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
