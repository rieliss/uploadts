"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { searchItem } from "@/app/action";

export function PlacePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(searchItem, [
    {
      error: null,
    },
  ]);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" variant="destructive">
        {pending ? "..." : "Save changes"}
      </Button>
    );
  }
  function SearchButton() {
    const { pending } = useFormStatus();
    return (
      <Button variant="secondary" type="submit">
        {pending ? "..." : "Search"}
      </Button>
    );
  }

  return (
    <div>
      <form
        action={async (formData: FormData) => {
          formAction(formData);
        }}
        ref={formRef}
        className="flex flex-col items-center justify-center p-2"
      >
        {/* <Image
          src="/uploads/1007555.png"
          width={200}
          height={0}
          alt="Picture of the author"
          className="rounded"
        /> */}
        <div className="w-full flex justify-between items-center gap-2">
          <input
            type="text"
            name="input"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="รหัสพนักงาน"
          />
          <SearchButton />
        </div>
      </form>
      <form>
        <div className="w-full flex flex-col items-center justify-center p">
          {formState.error ? (
            <p className="w-full flex flex-col items-left justify-between bg-red-100 rounded-lg p-2 mb-2 text-red-500 font-bold">
              โปรดใส่รหัสพนักงาน!
            </p>
          ) : (
            <div>
              {formState.map((t: any) => {
                return (
                  <div
                    key={t.id}
                    className="w-[280px] flex flex-col items-left justify-between text-sm border-gray-300 bg-gray-100 rounded-lg p-2 mb-2"
                  >
                    <span>
                      <b>รหัสพนักงาน : </b> {t.username}
                    </span>
                    <span>
                      <b>ชื่อ : </b> {t.name}
                    </span>
                    <span>
                      <b>แผนก : </b> {t.department}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
