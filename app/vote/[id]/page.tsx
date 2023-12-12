"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { searchItem, updateItem } from "@/app/action";
import Image from "next/image";
import NavBar from "@/components/nav";
import prisma from "@/app/db";
import { SearchButton, SubmitButton } from "@/components/Savebutton";

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

  return (
    <main className="p-4">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-10">
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
              className="w-full border p-2 rounded-lg text-black"
              placeholder="รหัสพนักงาน"
            />
            <SearchButton />
          </div>
        </form>

        <div className="w-full flex flex-col items-center justify-center p">
          {formState.error ? (
            <p className="w-full flex flex-col items-center justify-between rounded-lg p-2 mb-2 text-red-500 font-bold">
              โปรดใส่รหัสพนักงาน!
            </p>
          ) : (
            <form action={updateItem}>
              <div className="items-center flex flex-col justify-center gap-y-2 text-black">
                {formState.map((t: any) => {
                  return (
                    <div
                      key={t.id}
                      className="w-[280px] flex flex-col items-left justify-between text-sm border-gray-300 bg-gray-100 rounded-lg p-2 mb-2 gap-1 text-black"
                    >
                      <input
                        className="bg-gray-100 font-bold text-black"
                        type="text"
                        name="no"
                        defaultValue={t.username}
                        readOnly
                      />
                      <input
                        className="bg-gray-100 font-bold text-black"
                        type="text"
                        name="name"
                        defaultValue={t.name}
                        readOnly
                      />
                      <input
                        className="bg-gray-100 font-bold text-black"
                        type="text"
                        name="department"
                        defaultValue={t.department}
                        readOnly
                      />
                      {/* <span id="no">
                        <b>รหัสพนักงาน : </b> {t.username}
                      </span>
                      <span id="name">
                        <b>ชื่อ : </b> {t.name}
                      </span>
                      <span id="department">
                        <b>แผนก : </b> {t.department}
                      </span> */}
                      <input
                        type="hidden"
                        name="Vote"
                        defaultValue={params.id}
                      />
                    </div>
                  );
                })}
                <SubmitButton />
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
