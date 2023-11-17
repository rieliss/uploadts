"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { searchItem } from "@/app/action";

type Props = {};

export default function FormElement({}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(searchItem, null);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button
        variant="secondary"
        className="bg-green-500 rounded-lg text-white py-2"
        type="submit"
      >
        {pending ? "Searching..." : "Search"}
      </Button>
    );
  }

  return (
    <form
      action={async (formData: FormData) => {
        formAction(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex items-center justify-center gap-2">
        <Input
          type="text"
          name="username"
          placeholder="รหัสพนักงาน"
          className="border p-1 border-gray-300 rounded-lg"
        />
        <SubmitButton />
      </div>
      {state as string}
      <div className="mt-5 flex flex-col gap-y-2"></div>
    </form>
  );
}
