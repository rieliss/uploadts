"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { searchItem } from "@/app/action";
import Image from "next/image";
import NavBar from "@/components/nav";

type Props = {
  params: any;
};

export default function PlacePage({ params }: Props) {
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
        {pending ? "Voting..." : `Vote for ${params.id}`}
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
    <main className="p-4">
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <form
          action={async (formData: FormData) => {
            formAction(formData);
          }}
          ref={formRef}
          className="flex flex-col items-center justify-center p-4 gap-4"
        >
          <h1>
            <b>Vote for {params.id}</b>
          </h1>
          <Image
            src={`/uploads/${params.id}.jpg`}
            width={200}
            height={0}
            alt="Picture of the author"
            className="rounded"
          />
          <div className="w-full flex justify-between items-center gap-2">
            <input
              type="text"
              name="input"
              className="w-full border p-2 rounded-lg"
              placeholder="รหัสพนักงาน"
            />
            <SearchButton />
          </div>
        </form>
        <form>
          <div className="w-full flex flex-col items-center justify-center p">
            {formState.error ? (
              <p className="w-full flex flex-col items-left justify-between rounded-lg p-2 mb-2 text-red-500 font-bold">
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
    </main>
  );
}
