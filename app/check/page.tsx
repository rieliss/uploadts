"use client";
import { searchItem } from "@/app/action";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function FormElement() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(searchItem, [
    {
      error: null,
    },
  ]);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        className="bg-green-500 rounded-lg mt-2 text-white py-2"
        type="submit"
      >
        {pending ? "กำลังบันทึก..." : "บันทึก"}
      </button>
    );
  }
  function SearchButton() {
    const { pending } = useFormStatus();
    return (
      <button className="bg-gray-300 rounded-lg p-2 text-white" type="submit">
        {pending ? "..." : "ค้นหา"}
      </button>
    );
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="border rounded-lg shadow-xl p-10 w-[30vw]">
        <form
          action={async (formData: FormData) => {
            formAction(formData);
            formRef.current?.reset();
          }}
          ref={formRef}
          className="flex flex-col"
        >
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
          <div className="w-full flex flex-col items-left justify-between">
            {formState.error ? (
              <p className="w-full flex flex-col items-left justify-between mt-4 gap-2   bg-red-100 rounded-lg p-2 text-red-500 font-bold">
                โปรดใส่รหัสพนักงาน!
              </p>
            ) : (
              <div>
                {formState.map((t: any) => {
                  return (
                    <div
                      key={t.id}
                      className="w-full flex flex-col items-left justify-between mt-4 gap-2 text-sm border-gray-300 bg-gray-100 rounded-lg p-2"
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
    </div>
  );
}
